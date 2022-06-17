# Panel

[![Grafana 9](https://img.shields.io/badge/Grafana-9-orange)](https://www.grafana.com)
![CI](https://github.com/volkovlabs/volkovlabs-abc-panel/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-abc-panel/branch/main/graph/badge.svg?token=0m6f0ktUar)](https://codecov.io/gh/VolkovLabs/volkovlabs-abc-panel)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/VolkovLabs/volkovlabs-abc-panel.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/VolkovLabs/volkovlabs-abc-panel/context:javascript)

## Introduction

The ABC Panel is a template to create a new panel plugin for Grafana.

Generate from Template: [https://github.com/VolkovLabs/volkovlabs-abc-panel/generate](https://github.com/VolkovLabs/volkovlabs-abc-panel/generate)

### Requirements

- Grafana 8.5+, Grafana 9.0+ is required for version 2.X.
- Grafana 8.0+ is required for version 1.X.

## Getting Started

1. Install packages

```bash
yarn install
```

2. Build the plugin

```bash
yarn build
```

3. Sign the plugins if required

```
export GRAFANA_API_KEY=erXXXX==
yarn sign
```

4. Start Docker container

```bash
yarn run start
```

## Features

- Use `docker-compose` to start development environment with provisioned data source and dashboard.
- Provides unit test configuration.
- Based on the latest version of Grafana.
- Includes GitHub Actions for CI and Release.
