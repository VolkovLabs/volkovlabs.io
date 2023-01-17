---
title: Introduction
description: The RSS/Atom data source is a plugin for Grafana that retrieves RSS/Atom feeds and allows to visualize them using Dynamic Text and other panels.
tags:
  - Data Source
  - RSS
  - Atom
  - News feed
---

# RSS/Atom Data Source

![Grafana](https://img.shields.io/badge/Grafana-9.2.2-orange)
![CI](https://github.com/volkovlabs/volkovlabs-rss-datasource/workflows/CI/badge.svg)
![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-rss-datasource/branch/main/graph/badge.svg)
![CodeQL](https://github.com/VolkovLabs/volkovlabs-rss-datasource/actions/workflows/codeql-analysis.yml/badge.svg)

## Introduction

The RSS/Atom data source is a plugin for Grafana that retrieves RSS/Atom feeds and allows to visualize them using Dynamic Text and other panels.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/RAxqS2hpWkg" title="RSS/Atom data source" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Requirements

- **Grafana 8.5+**, **Grafana 9.0+** is required for version 2.X.
- **Grafana 8.0+** is required for version 1.X.

## Getting Started

RSS/Atom data source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/) or use the `grafana-cli` tool to install from the command line:

```bash
grafana-cli plugins install volkovlabs-rss-datasource
```

## Features

- Supports RSS 2.0, RSS 1.0 and Atom.
- Works great with Dynamic Text visualization panel.
- Returns Channel (Feed) data, Items (Entries) or both as separate data frames.
- Extract and parse as additional fields:
  - Image from Meta.
  - H4 and Image from the Encoded content.
  - Media:Group for YouTube.
- Filter items/entries based on the selected Time Range.

![Dashboard](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-rss-datasource/main/src/img/dashboard.png)

## Disable Sanitize HTML

To display HTML returned from feeds, please disable the Sanitize HTML parameter. For Docker:

```bash
GF_PANELS_DISABLE_SANITIZE_HTML=true
```

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-rss-datasource/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-rss-datasource/blob/main/LICENSE).
