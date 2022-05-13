# Intro

Volkov Labs specializes in developing custom plugins to visualize your data using Grafana as a Platform. Our solutions are cost-effective, creative, and delivered on time.

## How to Install Grafana

<iframe width="728" height="410" src="https://www.youtube.com/embed/xTQpV7B700w" title="How to Install Grafana for Data Analysts and Data Scientists" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Our Private Repository

We are constantly updating and improving our Grafana plugins. A private repository has become a part of our workflow to verify and test plugins on our demo server and projects.

### List plugins

```bash
$ grafana-cli --repo https://volkovlabs.io/plugins plugins list-remote
id: volkovlabs-env-datasource version: 1.2.0
id: volkovlabs-rss-datasource version: 1.6.0
id: volkovlabs-image-panel version: 2.6.0
id: volkovlabs-form-panel version: 1.1.0
```

### Install plugin

```bash
$ grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
✔ Downloaded volkovlabs-env-datasource v1.1.0 zip successfully

Please restart Grafana after installing plugins. Refer to Grafana documentation for instructions if necessary.
```

### Upgrade plugins

```
$ grafana-cli --repo https://volkovlabs.io/plugins plugins upgrade-all
Updating volkovlabs-rss-datasource
Removing plugin: volkovlabs-rss-datasource
installing volkovlabs-rss-datasource @ 1.6.0
from: https://volkovlabs.io/plugins/volkovlabs-rss-datasource/versions/1.6.0/download
into: /var/lib/grafana/plugins

✔ Installed volkovlabs-rss-datasource successfully
Please restart Grafana after installing plugins. Refer to Grafana documentation for instructions if necessary.
```
