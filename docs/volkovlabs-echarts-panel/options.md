---
description: Configuration item, data, universal interface, all parameters and data can all be modified through `setOption()` function in the plugin's options.
tags:
  - ECharts
  - Panel
  - Visualization
  - Data Source
---

# setOption() function

`setOption(options)` is the main Apache ECharts <u>library</u> function. This function is called to build any chart. It has one mandatory parameter - `options` which is a chart configuraion in a JSON format.

![setOptions Schema](/img/plugins/volkovlabs-echarts-panel/schema.png)

You specify the `options` in the Apache ECharts visualization panel in the Monaco Code editor located on the right-hand side. 

![setOptions Function](/img/plugins/volkovlabs-echarts-panel/function.png)

This whole text area is basically a body of the function that you write for the execution. This function takes in many parameters from Grafana. See the full list in the table below.

The only one parameter that is passed from this function to the `setOption()` is `options`. See the 'return' statement on the picture above.
 
## Parameters

| Parameter | Description |
| -- | -- |
| `data` | Grafana's `data` object with time range, series and request information. See the example on the picture above. |
| `echarts` | ECharts library. |
| `echartsInstance` | Instance of the ECharts. See the example on the picture above. To learn more about [echartsInstance](https://echarts.apache.org/en/api.html#echartsInstance) take a look at the official documentation.|
| `ecStat` | A statistical and data mining tool for Apache ECharts. More information in the [ecStat](tutorials/ecstat) section. |
| `locationService` | Grafana's `locationService` to work with browser location and history. |
| `notifyError(['Header', 'Error Message'])` | Display error notification. |
| `notifySuccess(['Header', 'Message'])` | Display successful notification. |
| `replaceVariables` | The `replaceVariables()` function to interpolate variables. |
| `theme` | Grafana's `theme` object. |


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

For more examples and details, take a look at the official documentation [Event and Action](https://apache.github.io/echarts-handbook/en/concepts/event/).

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

To learn more about [echartsInstance](https://echarts.apache.org/en/api.html#echartsInstance) take a look at the official documentation.
