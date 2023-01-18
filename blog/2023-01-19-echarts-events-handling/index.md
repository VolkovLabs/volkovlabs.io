---
authors:
  - mikhail
  - name: Barryetter
    url: https://github.com/Barryetter
    image_url: https://github.com/Barryetter.png
slug: apache-echarts-events-20230119
tags: [Apache ECharts, Events Handling]
keywords: [Apache ECharts, Panel, Chart, Visualization, Grafana]
---

# Events Handling and using Dashboard variables in the Apache ECharts

We received numerous questions from the community about Events Handling and using Dashboard variables in the Apache ECharts. We updated documentation accordingly and will summarize tips and tricks with examples from the community in the blog post.

<!--truncate-->

## Preserve Visual Map selected range

To save the `visualMap` range slider settings across Dashboard refreshes:

1. Create two dashboard variables (Constants are fine, and they should be hidden from the user). I named them `datarangeStart` and `datarangeEnd`, and set them to some initial values.
2. In the EChart panel code editor (before the return), add an event handler for the `datarangeselected` event. Note that you must first remove any event handler because the refresh will create duplicate handlers if you don't.

```js
echartsInstance.off('datarangeselected');
echartsInstance.on('datarangeselected', (params) => {
  const startValue = params.selected[0];
  const endValue = params.selected[1];
  locationService.partial({ 'var-datarangeStart': startValue, 'var-datarangeEnd': endValue }, true);
});
```

3. In the `visualMap` definition, set the `range` property to the Dashboard variables using the `replaceVariables` method as described in the [documentation](/plugins/volkovlabs-echarts-panel/variables):

```js
visualMap: [{
    type: 'continuous',
    left: 'center',
    bottom: '0%',
    min: 0,
    max: 30,
    range: [replaceVariables('$datarangeStart'), replaceVariables('$datarangeEnd')],
    orient: 'horizontal',
    text: ['', 'Occupancy'],
    realtime: true,
    calculable: true,
    dimension: 0,
    inRange: {
      color: ['#ffffff', '#0000ff', '#ffff00', '#ff00ff']
    }
  }]
```

## Create DOM (Document Object Model) Elements

It's possible to add elements (button, checkbox, select, etc.) to the DOM (Document Object Model) using `echartsInstance`. For example, you can add a button with an event handler.

```javascript
const myFunction = () => {
  alert('myFunction() called!');
}

//Get the DOM for the panel
let dom = echartsInstance.getDom();

//Get the child nodes
let nodeList = dom.childNodes;

//If we haven't added our controls to the DOM yet
if (nodeList.length < 2) {
  //Create a new button
  const btn = document.createElement("button");

  //Establish button name
  const textnode = document.createTextNode("My Button");
  btn.appendChild(textnode);

  //Add click event handler
  btn.addEventListener("click", myFunction);

  //Create a new <div>
  const div = document.createElement("div");

  //Add button to <div>
  div.appendChild(btn);

  //Insert new <div> ahead of existing chart div
  dom.insertBefore(div, dom.firstChild);
}
```

The Apache ECharts plugin is a visualization panel for Grafana that allows you to incorporate popular Apache ECharts libraries into your Grafana dashboard. You can read more about it in the [Documentation](/plugins/volkovlabs-echarts-panel).

Any feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!
