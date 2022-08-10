# Apache ECharts Panel

[![Grafana 9](https://img.shields.io/badge/Grafana-9.0.6-orange)](https://www.grafana.com)
![CI](https://github.com/volkovlabs/volkovlabs-echarts-panel/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-echarts-panel/branch/main/graph/badge.svg?token=0m6f0ktUar)](https://codecov.io/gh/VolkovLabs/volkovlabs-echarts-panel)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/VolkovLabs/volkovlabs-echarts-panel.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/VolkovLabs/volkovlabs-echarts-panel/context:javascript)

## Introduction

The ECharts Panel is a plugin for Grafana that allows to visualize Apache ECharts on your Grafana dashboard.

<iframe width="728" height="410" src="https://www.youtube.com/embed/DxqCrBEmrQw" title="Apache Echarts panel for Grafana | How to create modern dashboards in Grafana | Echarts Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Apache ECharts is a free, powerful charting and visualization library offering an easy way of adding intuitive, interactive, and highly customizable charts to your commercial products. It is written in pure JavaScript and based on zrender, which is a whole new lightweight canvas library.

### Requirements

- Grafana 8.5+, Grafana 9.0+ is required.

## Getting Started

Apache ECharts panel is not included in the Grafana Marketplace. It can be installed manually from our Private Repository or downloaded directly from the GitHub repository:

```bash
grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-echarts-panel
```

## Features

- Allows to visualize Apache ECharts using Monaco Code Editor with Auto formatting.
- Use setOption() function to set configuration and data.
- Based on the ECharts 5.3.3.
- Supports Light and Dark mode synchronized with Grafana Theme.
- Supports SVG and Canvas renderer.
- Includes USA and World maps. Allows to add custom Map files in the `maps` folder.
- Supports variables and location service to make Charts interactive.
- Includes [Liquid Fill Chart](https://github.com/ecomfe/echarts-liquidfill).

## setOption() Function

Configuration item, data, universal interface, all parameters and data can all be modified through setOption() function in the plugin's options.
Available Parameters:

- `data` - Grafana's `data` object.
- `theme` - Grafana's `theme` object.
- `echartsInstance` - Instance of the ECharts.
- `echarts` - ECharts library.
- `replaceVariables` - the `replaceVariables()` function to interpolate variables.
- `locationService` - Grafana's `locationService` to work with browser location and history.

![Panel](https://github.com/VolkovLabs/volkovlabs-echarts-panel/raw/main/src/img/panel.png)

To learn more about parameters you can log them in the Browser Console:

```javascript
console.log(
  data,
  theme,
  echartsInstance,
  echarts,
  replaceVariables,
  locationService
);
```

## Tutorial

Data visualizations can and should be done in style. In two parts video tutorial Daria explained how we built and visualized directed graph in Grafana using Apache ECharts panel.

<iframe width="728" height="410" src="https://www.youtube.com/embed/e3VHgpuzEF0" title="Build directional graph in Grafana using Apache ECharts | Tutorial part 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="728" height="410" src="https://www.youtube.com/embed/oM7XAVlsOio" title="Build directional graph in Grafana using Apache ECharts | Tutorial part 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Feedback

We love to hear from users, developers, and the whole community interested in this plugin. These are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues/new/choose).
- Star the repository to show your support.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-echarts-panel/blob/main/LICENSE).
