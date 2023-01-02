---
title: Introduction
description: A panel plugin for Grafana for dynamic, data-driven text.
tags:
  - Dynamic text
  - Panel
---

# Dynamic Text Panel

[![Grafana](https://img.shields.io/badge/Grafana-9.2.2-orange)](https://www.grafana.com)
![CI](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-dynamictext-panel/branch/main/graph/badge.svg?token=0m6f0ktUar)](https://codecov.io/gh/VolkovLabs/volkovlabs-dynamictext-panel)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-dynamictext-panel/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-dynamictext-panel/actions/workflows/codeql-analysis.yml)

## Introduction

A Dynamic Text visualization panel is a Grafana plugin that transforms monotone text/table data into vibrant, easy-to-read information cards. The panel supports variables, Markdown and Handlebars.

The built-in Text panel in Grafana does support variables but does not support any styling features. The Dynamic Text visualization panel lets you define a text template using the data from your data source query.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/MpNZ4Yl-p0U" title="Dynamic Text Plugin for Grafana | Markdown, HTML and Handlebars to transform data visualizations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Requirements

- **Grafana 8.5+**, **Grafana 9.0+** is required for version 2.X.
- **Grafana 7.0+** is required for version 1.X.

## Getting Started

The Dynamic Text visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or utilizing the Grafana command line tool. For the latter, use the following command:

```bash
grafana-cli plugins install marcusolsson-dynamictext-panel
```

## Features

- Uses Monaco Code Editor with Auto formatting to update Templates.
- Supports [Markdown](https://commonmark.org/help/) and [Handlebars](https://handlebarsjs.com/guide/expressions.html#basic-usage).
- Uses [markdown-it](https://github.com/markdown-it/markdown-it) for rendering Markdown to HTML.
- HTML inside templates is sanitized using [XSS](https://jsxss.com/en/index.html) through `textUtil`.
- Allows to display Time global variables (`__to` and `__from`) as seconds, ISO, and formatted using `dayjs`.
- Supports disable Sanitizing using Grafana configuration `disable_sanitize_html`.

![Dynamic Text Panel](/img/plugins/volkovlabs-dynamictext-panel/screenshot.png)

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/blob/main/LICENSE).
