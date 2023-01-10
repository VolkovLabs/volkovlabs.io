---
authors: [mikhail]
slug: installing-grafana-plugins-from-a-private-repository-805b54a1add3
tags: [Grafana, Private Repository]
keywords: [Grafana, Private Repository, Plugins]
---

# Installing Grafana plugins from a Private repository

The Grafana Catalog application is one of our favorite features introduced in Grafana 8. It allows installing registered plugins from the official Grafana repository when connected to the Internet, but how do you upgrade and manage Grafana plugins without access to the external network?

<!--truncate-->

With an increasing number of companies moving to the Cloud, there are still many use cases when Grafana instances are deployed offline, have firewall restrictions, and cannot connect to the official repository. Working on such a project, we examined various options to install Grafana plugins.

This article will talk about installing plugins using Grafana CLI (Command-Line Interface) and explain how to create a Private repository.

## Manual installation

The easiest way to distribute the plugin to a single Grafana instance is to download from the Grafana or GitHub repository, extract it to the particular folder specified in the configuration and restart Grafana.

The advantage of this method is its simplicity. Deploying multiple Grafana instances with various plugins will require custom procedures to install and upgrade utilizing this solution.

## Grafana CLI

Grafana CLI is a tool bundled with the Grafana server, which allows to perform various administrative tasks and manage plugins. Before Grafana 8, it was the most convenient way to install plugins on Grafana instances from the Grafana repository. It is also used for automated installation.

The general syntax for commands in Grafana CLI is:

```sh
grafana-cli [global options] command [command options] [arguments...]
```

Grafana CLI allows overriding

- location of the plugin's archive
- repository URL to download from
- plugins folder, etc.

You can learn more about all those options in the [Documentation](https://grafana.com/docs/grafana/latest/cli/).

Installing a plugin by overriding the location of the plugin's archive is the most effortless way, which requires copying the plugin's archive to the HTTP(S) server reachable from the Grafana instance and repeating the same step to upgrade in the future:

```sh
grafana-cli --insecure --pluginUrl https://company.com/plugins/<plugin-id>-<plugin-version>.zip plugins install <plugin-id>
```

The ultimate solution is to create a Private repository with a list of available plugins and versions. Overriding the repository URL allows installing and updating all plugins with the latest versions at once. The syntax is:

```sh
grafana-cli --repo "https://example.com/plugins" plugins install <plugin-id>
```

## Private Repository

Looking around, we couldn't find any information on creating a Private repository and decided to share this information with the community.

Grafana CLI looks for the `/plugins/repo` subfolder when setting a repository location. If plugins are found, it will display their names with the latest versions:

```sh
$ grafana-cli --repo https://volkovlabs.io/plugins plugins list-remote
id: volkovlabs-env-datasource version: 1.1.0
id: volkovlabs-rss-datasource version: 1.4.0
id: volkovlabs-image-panel version: 2.5.0
```

The simplest format for the index file is to create a JSON array with the definition of the plugin and the latest version.

```json
{
  "plugins": [
    {
      "id": "volkovlabs-env-datasource",
      "type": "datasource",
      "url": "https://github.com/VolkovLabs/volkovlabs-env-datasource",
      "versions": [
        {
          "version": "1.1.0"
        }
      ]
    }
  ]
}
```

To list available versions for the specific plugin, provide the plugin's name for the `list-versions` command:

```sh
$ grafana-cli --repo https://volkovlabs.io/plugins plugins list-versions volkovlabs-env-datasource
1.1.0
```

Grafana CLI will request a file `/plugins/repo/volkovlabs-env-datasource` and display available versions. Backend plugins can be stored as separate files for each architecture build or specified as any for an archive with all supporting architecture.

```json
{
  "versions": [
    {
      "version": "1.1.0",
        "arch": {
          "any": {}
        }
     }
  ]
}
```

The next step is to upload plugins to specific locations and install them. To install the latest version of the `volkovlabs-env-datasource` plugin Grafana CLI will look for the download file in the particular location.

```sh
/plugins/volkovlabs-env-datasource/versions/1.1.0/download
```

Here is an example of how to install the plugin from the Private repository we just created:

```sh
$ grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
✔ Downloaded volkovlabs-env-datasource v1.1.0 zip successfully
Please restart Grafana after installing plugins.
```

To update all plugins at once, execute:

```sh
$ grafana-cli --repo https://volkovlabs.io/plugins plugins update-all
```

## Environment Data Source Plugin

If not used correctly, the Environment Data Source plugin might expose environment variables with restricted information (password, access token, etc.). That limits it from being a part of the official Grafana repository.

As discussed in [our previous article](using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416), we utilize it for our IoT (Internet of Things) projects, and our Private repository helps us install and update this plugin.

We are constantly updating and improving our Grafana plugins. A private repository has become a part of our workflow to verify and test plugins on our demo server and projects.