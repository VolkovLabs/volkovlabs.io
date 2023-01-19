---
description: Use `replaceVariables()` function to replace Dashboard and Global variables.
tags:
  - ECharts
  - Panel
  - Visualization
  - Variables
---

# Variables

Use `replaceVariables()` function to replace Dashboard and Global variables.

```javascript
const email = replaceVariables("${__user.email}");
```

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sczRq2lI3e4" title="Grafana variables | Dashboard, Global and Environment variables | Environment Data Source" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Global Variables

You can find [global built-in variables](https://grafana.com/docs/grafana/latest/variables/variable-types/global-variables/) in the Grafana documentation.

## Replace Dashboard Variables

In the following example, we replaced series's name with the variable's value.

![Replace Dashboard Variables](img/variables.png)

Visualization panel's function:

```js
let names = [];
let amounts = [];
data.series.map((s) => {
  names = s.fields.find((f) => f.name === 'Name').values.buffer;
  amounts = s.fields.find((f) => f.name === 'Amount').values.buffer;
});

return {
  grid: {
    bottom: "3%",
    containLabel: true,
    left: "3%",
    right: "4%",
    top: "4%",
  },
  tooltip: {},
  legend: {
  },
  xAxis: {
    data: names
  },
  yAxis: {},
  toolbox: { feature: { restore: {} } },
  series: [
    {
      name: replaceVariables('$var'),
      type: 'bar',
      data: amounts
    }
  ]
};
```

## Update Dashboard Variables

Dashboard variables can be updated in the [Event Handlers](events).

```js
echartsInstance.on('click', (params) => {
  locationService.partial({ 'var-name': value }, true);
});
```