# Apache ECharts Panel

[![Grafana 9](https://img.shields.io/badge/Grafana-9-orange)](https://www.grafana.com)
![CI](https://github.com/volkovlabs/volkovlabs-echarts-panel/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-echarts-panel/branch/main/graph/badge.svg?token=0m6f0ktUar)](https://codecov.io/gh/VolkovLabs/volkovlabs-echarts-panel)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/VolkovLabs/volkovlabs-echarts-panel.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/VolkovLabs/volkovlabs-echarts-panel/context:javascript)

## Introduction

The ECharts Panel is a plugin for Grafana that allows to visualize Apache ECharts on your Grafana dashboard.

![Echarts](https://github.com/VolkovLabs/volkovlabs-echarts-panel/raw/main/src/img/dashboard.png)

Apache ECharts is a free, powerful charting and visualization library offering an easy way of adding intuitive, interactive, and highly customizable charts to your commercial products. It is written in pure JavaScript and based on zrender, which is a whole new lightweight canvas library.

### Requirements

- Grafana 8.5+, Grafana 9.0+ is required.

## Getting Started

ECharts panel is under development and not included in the Grafana Marketplace yet. It can be installed manually from our private repository or downloaded directly from the GitHub repository:

```bash
grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-echarts-panel
```

## Features

- Allows to visualize Apache ECharts using Monaco Code Editor.
- Based on the ECharts 5.3.3.
- Supports Light and Dark mode synchronized with Grafana Theme.
- Supports SVG and Canvas renderer.
