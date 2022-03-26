---
sidebar_position: 1
---

# Environment data source

[![Grafana 8](https://img.shields.io/badge/Grafana-8-orange?style=for-the-badge)](https://www.grafana.com)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/VolkovLabs/volkovlabs-env-datasource.svg?logo=lgtm&logoWidth=18&style=for-the-badge)](https://lgtm.com/projects/g/VolkovLabs/volkovlabs-env-datasource/context:javascript)
![CI](https://github.com/volkovlabs/volkovlabs-env-datasource/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource/branch/main/graph/badge.svg?token=2W9VR0PG5N)](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource)

## Introduction

The Environment data source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables to retrieve data.

<iframe width="728" height="410" src="https://www.youtube.com/embed/GPzsciOxKdk" title="Environment Data Source" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Requirements

Grafana 8.0 is required.

## Getting Started

Because of the security reasons Environment data source can not be included in the Grafana Marketplace and can be installed manually from our private repository or downloaded directly from the GitHub repository:

```bash
grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
```

## Features

- Returns Environment Variables.
- Allows to filter unnecessary or secured variables using Regex.

## Provisioning

Grafana supports managing data sources by adding one or more YAML config files in the `provisioning/datasources` folder.

Example of provisioning the Environment Data Source with a filter `GF_` to return only Grafana related variables.

```json
datasources:
  - name: Environment
    type: volkovlabs-env-datasource
    access: proxy
    isDefault: true
    orgId: 1
    version: 1
    editable: true
    jsonData:
      filter: GF_
```
