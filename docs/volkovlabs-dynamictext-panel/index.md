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

## Every row vs All rows

You have a choice of how the retrieved data source data is passed into the Dynamic Text Panel. 
 - `every row` means that the **content** template is applied to every retrieved row.
 - `all rows`, the query results are passed entirely as the `data` field to the template.
 
In order to work with the query results as a whole, you can use [builtin-helpers](https://handlebarsjs.com/guide/builtin-helpers.html#each) to iterate over the records.

For instance, if your data source returns the following 4 columns of data:

```md
| app  | description                  | cluster | tier     |
| ---- | ---------------------------- | ------- | -------- |
| auth | Handles user authentication. | prod    | frontend |
```

you can iterate using the following handlebars commands:
```md
{{#each (variable "hostname")}}

- {{app}}

{{/each}}
```

## Content

It is the code editor where you can place the parsing commands or, in other words, create a visualization template for your data.
To reference the data elements in your template, use double braces. For instance, to display a value from the `photo` field:

```
{{photo}}
```
Depending on the `All rows/Every row` toggle, the template is applied to either every row or to the entire query results.
To learn more about how to create a template, please, review the information about:

- [Helpers](helpers) - functions that let you perform text transformation within your template.
- [Recipes](recipes) - useful snippets for your templates.

## Default content

The default content is displayed if the connected data source returns nothing. Use it to give users instructions on what to do or who to contact when the query returns an empty result.

Even though there are no data from the data source, you can still use the available [helpers](helpers).

## Sanitizing

Sanitizing is enabled by default, which makes some elements like `<button>` unavailable in the **content** panel parameter.

To disable sanitizing, use the Grafana configuration option [`disable_sanitize_html`](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#disable_sanitize_html). For Docker container and Docker Compose, use as:

```bash
- GF_PANELS_DISABLE_SANITIZE_HTML=true
```

## The processing order

The panel renders Handlebars → Markdown → Sanitized HTML and displays the final result.

## Feedback

We love to hear from you. These are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/blob/main/LICENSE).
