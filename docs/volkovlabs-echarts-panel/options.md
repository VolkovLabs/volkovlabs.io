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

## Parameters

| Parameter | Description |
| -- | -- |
| `data` | Grafana's `data` object with time range, series and request information. |
| `theme` | Grafana's `theme` object. |
| `echartsInstance` | Instance of the ECharts. |
| `echarts` | ECharts library. |
| `ecStat` | A statistical and data mining tool for Apache ECharts. |
| `replaceVariables` | the `replaceVariables()` function to interpolate variables. |
| `locationService` | Grafana's `locationService` to work with browser location and history. |
| `notifySuccess(['Header', 'Message'])` | Display successful notification. |
| `notifyError(['Header', 'Error Message'])` | Display error notification. |

![Panel](https://github.com/VolkovLabs/volkovlabs-echarts-panel/raw/main/src/img/panel.png)

To learn more about parameters you can log them in the Browser Console:

```javascript
console.log(data, theme, echartsInstance, echarts, replaceVariables, locationService);
```

## Event Handling

Users can trigger corresponding events by their operation. To react on Mouse and other events use `echartsInstance`:

```javascript
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

```javascript
notifySuccess(['Update', 'Values updated successfully.']);
notifyError(['Update', `An error occured updating values.`]);
```

## Scale when resize

To scale the content when panel resized use `echartsInstance` methods to retrieve width and height of the panel.

```javascript
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
