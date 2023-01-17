---
title: Introduction
description: The Data Manipulation Form Panel is a plugin for Grafana that can be used to insert, update application data, and modify configuration directly from your Grafana dashboard.
tags:
  - Data Manipulation
  - Custom Forms
  - JSON
  - Panel
---

# Data Manipulation Panel

![Grafana](https://img.shields.io/badge/Grafana-9.3.1-orange)
![CI](https://github.com/volkovlabs/volkovlabs-form-panel/workflows/CI/badge.svg)
![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-form-panel/branch/main/graph/badge.svg)
![CodeQL](https://github.com/VolkovLabs/volkovlabs-form-panel/actions/workflows/codeql-analysis.yml/badge.svg)

## Introduction

The Data Manipulation Panel is a conceptually new plugin for Grafana. It is the first plugin that allows inserting and updating application data, as well as modifying configuration directly from your Grafana dashboard.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DXALVG8GijM" title="Data Manipulation Plugin for Grafana | Manual data entering and User input into Dashboard" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Requirements

- **Grafana 8.5+**, **Grafana 9.0+** is required for version 2.X.
- **Grafana 8.0+** is required for version 1.X.

## Getting Started

Data Manipulation panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or utilizing the Grafana command line tool. For the latter, use the following command:

```bash
grafana-cli plugins install volkovlabs-form-panel
```

## Features

- Provides functionality to create customizable forms with elements (see the picture below):
  - Number Input
  - Radio Group with Boolean options
  - String Input
  - Number Slider
  - Select with Custom options
  - Date and Time
  - Radio Group with Custom options
  - Read-only (Disabled) with support for lookup
  - Password Input
  - Text Area
  - Code Editor
- Supports the Custom Code for the `Initial` and `Update` requests.
- Allows specifying `GET` request to get initial values and `DELETE`, `PATCH`, `POST`, and `PUT` requests to send values updated in the form.
- Allows adding `Header` fields to the `Initial` and `Update` requests.
- Allows customizing `Submit`, `Reset` buttons, and form layout.
- Allows splitting form elements into sections.
- Allows requesting confirmation before `Update` request.
- Allows sending all or only updated elements in the `Payload`.
- Allows displaying `Success` and `Error` notifications from the **Custom Code**.
- Supports Code Editor suggestions for available parameters.

![Form Panel](https://raw.githubusercontent.com/volkovlabs/volkovlabs-form-panel/main/src/img/panel.png)

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-form-panel/blob/main/LICENSE).
