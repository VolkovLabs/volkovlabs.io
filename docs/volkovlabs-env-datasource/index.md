---
title: Introduction
description: The Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables to retrieve data.
tags:
  - Data Source
  - Environment Variables
  - IoT
---

# Environment Data Source

![Grafana](https://img.shields.io/badge/Grafana-9.2.2-orange)
![CI](https://github.com/volkovlabs/volkovlabs-env-datasource/workflows/CI/badge.svg)
![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource/branch/main/graph/badge.svg)

## Introduction

The Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables in your code.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sczRq2lI3e4" title="Grafana variables | Dashboard, Global and Environment variables | Environment Data Source" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Requirements

- **Grafana 8.5+**, **Grafana 9.0+** is required for version 2.X.
- **Grafana 8.0+** is required for version 1.X.

## Getting Started

Environment Data Source is not included in the Grafana Catalog. It can be installed manually from our Private Repository or downloaded directly from the GitHub:

```bash
grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
```

Plugin is signed for Grafana running on `http://localhost:3000`. if you are using different URL, take a look at [Allow Unsigned Plugins](https://volkovlabs.io/plugins/grafana-allow-unsigned/).

## Features

- Returns Environment Variables.
- Allows filtering unnecessary or secured variables using Regex.

![Dashboard](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-env-datasource/main/src/img/dashboard.png)

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-env-datasource/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-env-datasource/blob/main/LICENSE).
