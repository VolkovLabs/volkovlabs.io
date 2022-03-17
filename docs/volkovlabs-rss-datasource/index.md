---
sidebar_position: 1
---

# RSS/Atom data source

[![Grafana 8](https://img.shields.io/badge/Grafana-8-orange?style=for-the-badge)](https://www.grafana.com)
[![RSS/Atom](https://img.shields.io/badge/dynamic/json?color=blue&label=RSS%2FAtom%20Data%20Source&query=%24.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fvolkovlabs-rss-datasource&style=for-the-badge)](https://grafana.com/grafana/plugins/volkovlabs-rss-datasource)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/VolkovLabs/volkovlabs-rss-datasource.svg?logo=lgtm&logoWidth=18&style=for-the-badge)](https://lgtm.com/projects/g/VolkovLabs/volkovlabs-rss-datasource/context:javascript)
![CI](https://github.com/volkovlabs/volkovlabs-rss-datasource/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-rss-datasource/branch/main/graph/badge.svg?token=2W9VR0PG5N)](https://codecov.io/gh/VolkovLabs/volkovlabs-rss-datasource)

## Introduction

The RSS/Atom data source is a plugin for Grafana that retrieves RSS/Atom feeds and allows to visualize them using Dynamic Text and other panels.

![Dashboard](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-rss-datasource/main/src/img/dashboard.png)

### Demo

Demo is available on [demo.volkovlabs.io](https://demo.volkovlabs.io).

### Requirements

Grafana 8.0 is required.

## Getting Started

RSS/Atom data source can be installed from the Grafana Marketplace or use the `grafana-cli` tool to install from the command line:

```bash
grafana-cli plugins install volkovlabs-rss-datasource
```

![Grafana Marketplace](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-rss-datasource/main/src/img/grafana-marketplace.png)

## Features

- Supports RSS 2.0 and Atom.
- Works great with Dynamic Text panel by Marcus Olsson (marcusolsson-dynamictext-panel).
- Returns Channel (Feed) data, Items (Entries) or both as separate data frames.
- Extract and parse as additional fields:
  - Image from Meta.
  - H4 and Image from the Encoded content.
- Filter items/entries based on the selected Time Range.

## Provisioning

Grafana supports managing data sources by adding one or more YAML config files in the `provisioning/datasources` folder.

Example of provisioning the RSS/Atom Data Source for Bitcoin news feed.

```json
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
