# Our Work

Our plugins for Grafana represents three categories: Manage, Operate, and Visualize.

<img src="/img/plugins.svg" />

## Private Repository

We are constantly updating and improving our Grafana plugins. A private repository has become a part of our workflow to verify and test plugins on our demo server and projects.

Read more in the blog [Installing Grafana plugins from a Private repository](https://volkovlabs.com/installing-grafana-plugins-from-a-private-repository-805b54a1add3).

## List plugins

```sh
$ grafana-cli --repo https://volkovlabs.io/plugins plugins list-remote
id: marcusolsson-calendar-panel version: 1.0.0
id: volkovlabs-env-datasource version: 2.1.0
id: volkovlabs-rss-datasource version: 2.2.0
id: volkovlabs-image-panel version: 3.1.0
id: volkovlabs-form-panel version: 2.6.0
id: volkovlabs-echarts-panel version: 3.5.0
id: volkovlabs-balena-app version: 1.3.0
```

## Install plugin

```bash
$ grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
✔ Downloaded volkovlabs-env-datasource v2.0.0 zip successfully

Please restart Grafana after installing plugins.
Refer to Grafana documentation for instructions if necessary.
```

## Upgrade plugins

```bash
$ grafana-cli --repo https://volkovlabs.io/plugins plugins upgrade-all
Updating volkovlabs-rss-datasource
Removing plugin: volkovlabs-rss-datasource
installing volkovlabs-rss-datasource @ 2.1.0
from: https://volkovlabs.io/plugins/volkovlabs-rss-datasource/versions/2.1.0/download
into: /var/lib/grafana/plugins

✔ Installed volkovlabs-rss-datasource successfully
Please restart Grafana after installing plugins.
```
