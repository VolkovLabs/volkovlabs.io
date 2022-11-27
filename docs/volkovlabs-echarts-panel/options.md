---
description: Configuration item, data, universal interface, all parameters and data can all be modified through `setOption()` function in the plugin's options.
tags:
  - ECharts
  - Panel
  - Visualization
  - Data Source
---

# setOption() Function

Configuration item, data, universal interface, all parameters and data can be modified through `setOption()` function in the plugin's options.

## Available parameters

- `data` - Grafana's `data` object with time range, series and request information.
- `theme` - Grafana's `theme` object.
- `echartsInstance` - Instance of the ECharts.
- `echarts` - ECharts library.
- `ecStat` - A statistical and data mining tool for Apache ECharts.
- `replaceVariables` - the `replaceVariables()` function to interpolate variables.
- `locationService` - Grafana's `locationService` to work with browser location and history.
- `notifySuccess(['Header', 'Message'])` - Display successful notification.
- `notifyError(['Header', 'Error Message'])` - Display error notification.

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

## Dashboard and Global Variables

Use `replaceVariables()` function to replace Dashboard and Global variables.

```javascript
const email = replaceVariables("${__user.email}");
```

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sczRq2lI3e4" title="Grafana variables | Dashboard, Global and Environment variables | Environment Data Source" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can find [global built-in variables](https://grafana.com/docs/grafana/latest/variables/variable-types/global-variables/) in the Grafana documentation.

## Data Sources

To use Apache ECharts with data from data sources get each field in a array:

```javascript
data.series.map((s) => {
  if (s.refId === "logo") {
    images = s.fields.find((f) => f.name === "body").values.buffer;
  } else if (s.refId === "connections") {
    sources = s.fields.find((f) => f.name === "source").values.buffer;
    targets = s.fields.find((f) => f.name === "target").values.buffer;
  } else if (s.refId === "nodes") {
    titles = s.fields.find((f) => f.name === "title").values.buffer;
    descriptions = s.fields.find((f) => f.name === "description").values.buffer;
  }
});
```

<iframe width="100%" height="500" src="https://www.youtube.com/embed/K5YNMSIm9AM" title="How to use Data Source in Apache ECharts in 90 seconds | Grafana Data attribute" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Merge elements into array:

- get values for each field
- combine in an array of arrays
- use as `series[0]` to access first query

```javascript
const series = data.series.map((s) => {
  const rates = s.fields.find((f) => f.name === "Rate").values.buffer;
  const calls = s.fields.find((f) => f.name === "Calls").values.buffer;
  const names = s.fields.find((f) => f.name === "Name").values.buffer;

  return rates.map((d, i) => [d, calls[i], names[i]]);
});
```

## Event Handling

Users can trigger corresponding events by their operation. To react on Mouse and other events use `echartsInstance`:

```
/**
 * On Mouse Click
 */
echartsInstance.on('click', (params) => {
  notifySuccess(['Event', 'On Click']);
  ...
  echartsInstance.resize(); // to redraw visualization
});

/**
 * On Double Click
 */
echartsInstance.on('dblclick', (params) => {
  ...
  echartsInstance.resize();
});
```

Take a look at the official documentation [Event and Action](https://apache.github.io/echarts-handbook/en/concepts/event/) to learn more.

## Notifications

Success and Error notifications can be triggered on events handling:

```
notifySuccess(['Update', 'Values updated successfully.']);
notifyError(['Update', `An error occured updating values.`]);
```

## Scale when resize

To scale the content when panel resized use `echartsInstance` methods to retrieve width and height of the panel.

```
  graphic: {
    type: "image",
    style: {
      image: `data:image/svg+xml;utf8,${SVG}`,
      width: echartsInstance.getWidth(),
      height: echartsInstance.getHeight(),
    },
  },
```

Take a look at the official documentation [echartsInstance](https://echarts.apache.org/en/api.html#echartsInstance) to see all available methods.
