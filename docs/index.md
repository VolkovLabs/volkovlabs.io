---
sidebar_position: 1
---

# Intro

Volkov Labs specializes in developing custom plugins to visualize your data using Grafana as a Platform. Our solutions are cost-effective, creative, and delivered on time.

## Our Private Repository

### List plugins

```bash
$ grafana-cli --repo https://volkovlabs.io/plugins plugins list-remote

id: volkovlabs-env-datasource version: 1.1.0
id: volkovlabs-rss-datasource version: 1.4.0
id: volkovlabs-image-panel version: 2.5.0
```

### Install plugin

```bash
$ grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
✔ Downloaded volkovlabs-env-datasource v1.1.0 zip successfully

Please restart Grafana after installing plugins. Refer to Grafana documentation for instructions if necessary.
```
