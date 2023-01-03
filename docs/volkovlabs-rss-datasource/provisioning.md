---
description: The RSS/Atom data source is a plugin for Grafana that retrieves RSS/Atom feeds and allows to visualize them using Dynamic Text and other panels.
tags:
  - Data Source
  - RSS
  - Atom
  - News feed
  - Provisioning
---

# Provisioning

Grafana supports managing data sources by adding one or more YAML config files in the `provisioning/datasources` folder.

Example of provisioning the RSS/Atom Data Source for Bitcoin news feed.

```yaml
datasources:
  - name: Bitcoin
    type: volkovlabs-rss-datasource
    access: proxy
    orgId: 1
    uid: rZAdZdf7k
    version: 1
    editable: true
    jsonData:
      feed: https://news.bitcoin.com/feed/
```
