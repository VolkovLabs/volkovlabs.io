---
title: Introduction
description: The Static Data Source is a plugin for Grafana that allows to emulate your data to test and develop panels.
tags:
  - Grafana
  - Static
  - Data Source
  - Emulate
  - Development
---

# Static Data Source

[![Grafana 9](https://img.shields.io/badge/Grafana-9.2.2-orange)](https://www.grafana.com)
[![YouTube](https://img.shields.io/badge/YouTube-Playlist-red)](https://youtube.com/playlist?list=PLPow72ygztmSOuCRtS85zolztwDMpCsIV)
![CI](https://github.com/volkovlabs/volkovlabs-static-datasource/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-static-datasource/branch/main/graph/badge.svg?token=0m6f0ktUar)](https://codecov.io/gh/VolkovLabs/volkovlabs-static-datasource)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-static-datasource/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-static-datasource/actions/workflows/codeql-analysis.yml)

## Introduction

The Static Data Source is a plugin for Grafana that allows to emulate your data to test and develop panels. It is a handy little tool that leads complex tasks to successful completion.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/QOV8ECOUjWs" title="Static data source for Grafana | Mimic any data source | Tutorial and examples" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Requirements

- **Grafana 8.5+**, **Grafana 9.0+** is required for version 2.X.
- **Grafana 7.3+** is required for version 1.X.

## Getting Started

The Static Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-static-datasource/) or use the `grafana-cli` tool to install from the command line:

```bash
grafana-cli plugins install marcusolsson-static-datasource
```

## Features

- Create static visualizations that don't depend on a specific data source.
- Build custom query responses for testing or developing panel plugins.
- Store data and images directly in the dashboard.
- Supports variables in the text fields.

![Screenshot](https://github.com/volkovlabs/volkovlabs-static-datasource/raw/main/src/img/dark.png)

## Feedback

We love to hear from users, developers, and the whole community interested in this plugin. These are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-static-datasource/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-static-datasource/blob/main/LICENSE).
