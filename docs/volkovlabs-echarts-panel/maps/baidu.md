---
description: Baidu Maps supported in the latest version of the Apache ECharts Panel.
title: Baidu
tags:
  - ECharts
  - Panel
  - Visualization
  - Baidu
  - Maps
---

# Baidu Maps

:::info

Supported since Apache ECharts visualization panel 3.6.0.

:::

Baidu Maps are loaded using API v3 and require Access Key. You can get it from [https://lbsyun.baidu.com/apiconsole/key#/home](https://lbsyun.baidu.com/apiconsole/key#/home).

- Loading Baidu Maps takes 2-3 seconds.
- Callback function `bmapReady` will be executed on load. Name can be changed in the Panel options.
- While loading, animation can be displayed using the code below.

Animation examples.

![Loading Option 1](/img/plugins/volkovlabs-echarts-panel/waiting-1.gif) ![Loading Option 2](/img/plugins/volkovlabs-echarts-panel/waiting-2.gif)

## Function

```javascript
/**
 * Baidu Maps
 */
const bmap = {
  tooltip: {
    trigger: "item",
  },
  bmap: {
    zoom: 5,
    roam: true,
  },
};

/**
 * Loading
 */
const loading = {
  graphic: {
    elements: [
      {
        type: 'group',
        left: 'center',
        top: 'center',
        children: new Array(7).fill(0).map((val, i) => ({
          type: 'rect',
          x: i * 20,
          shape: {
            x: 0,
            y: -40,
            width: 10,
            height: 80
          },
          style: {
            fill: '#5470c6'
          },
          keyframeAnimation: {
            duration: 1000,
            delay: i * 200,
            loop: true,
            keyframes: [
              {
                percent: 0.5,
                scaleY: 0.3,
                easing: 'cubicIn'
              },
              {
                percent: 1,
                scaleY: 1,
                easing: 'cubicOut'
              }
            ]
          }
        }))
      }
    ]
  }
}

/**
 * Maps are Ready
 */
window.bmapReady = () => {
  notifySuccess(['Baidu Maps', 'Loaded...']);
  echartsInstance.setOption(bmap, notmerge = true);
}

return window.BMap ? bmap : loading;
```
