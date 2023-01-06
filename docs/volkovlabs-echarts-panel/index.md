---
title: Introduction
description: The Apache ECharts plugin is a visualization panel for Grafana that allows you to incorporate popular Apache ECharts libraries into your Grafana dashboard.
tags:
  - ECharts
  - Panel
  - Visualization
---

# Apache ECharts Panel

[![Grafana](https://img.shields.io/badge/Grafana-9.3.1-orange)](https://www.grafana.com)
[![YouTube](https://img.shields.io/badge/YouTube-Playlist-red)](https://youtube.com/playlist?list=PLPow72ygztmQHGWFqksEf3LebUfhqBfFu)
![CI](https://github.com/volkovlabs/volkovlabs-echarts-panel/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-echarts-panel/branch/main/graph/badge.svg?token=0m6f0ktUar)](https://codecov.io/gh/VolkovLabs/volkovlabs-echarts-panel)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-echarts-panel/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-echarts-panel/actions/workflows/codeql-analysis.yml)

## Introduction

The Apache ECharts plugin is a visualization panel for Grafana that allows you to incorporate popular Apache ECharts libraries into your Grafana dashboard.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DxqCrBEmrQw" title="Apache Echarts panel for Grafana | How to create modern dashboards in Grafana | Echarts Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Apache ECharts libraries](https://echarts.apache.org/en/index.html) is a free, powerful charting and visualization library with statistical capabilities. It is written in pure JavaScript and based on zrender, which is a whole new lightweight canvas library.

Apache ECharts visualization panel offers an easy way of adding intuitive, interactive, and highly customizable charts into your Grafana dashboard. 

Simply put, and to avoid confusion, 
 - Apache ECharts libraries is the charting library.
 - Apache ECharts plugin (which is the same as the Apache ECharts visualization panel) brings the Apache ECharts libraries into the Grafana dashboard.

### Requirements

- **Grafana 8.5+, Grafana 9.0+** is required.

## Getting Started

Apache ECharts visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or utilizing the Grafana command line tool. For the latter, use the following command:

```bash
grafana-cli plugins install volkovlabs-echarts-panel
```

## Features

- Provides Monaco Code Editor for:
   - Working with Grafana data frames (JavaScript),
   - Updating chart configurations in JSON format.
- Supports Code Auto formatting.
- Executes the `setOption()` function using Monaco Code Editor content.
- Supports variables and location service to make Charts interactive.
- Based on the ECharts 5.4.1.
- Supports Light and Dark modes synchronized with Grafana Theme.
- Supports SVG and Canvas renderers.
- Includes USA and World GeoJSON maps. Allows adding custom Map files in the `maps` folder.
- Includes [Liquid Fill Chart](https://github.com/ecomfe/echarts-liquidfill), which is usually used to represent data in percentage.
- Includes [ECharts-GL](https://github.com/ecomfe/echarts-gl), which providing 3D plots, globe visualization, and WebGL acceleration.
- Includes [ecStat](https://github.com/ecomfe/echarts-stat), a statistical and data mining tool.
- Supports Code Editor suggestions for Parameters and variables.
- Allows displaying Success and Error notifications.
- Supports Baidu, Gaode, Google maps using API. Requires to provide access key.
- Supports real-time data updates using streaming Data Sources and Grafana Live.
- Has 100+ ready-as-is examples at [echarts.volkovlabs.io](https://echarts.volkovlabs.io).

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-echarts-panel/blob/main/LICENSE).
