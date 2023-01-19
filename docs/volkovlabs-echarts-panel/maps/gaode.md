---
description: Gaode Maps supported in the latest version of the Apache ECharts Panel.
tags:
  - ECharts
  - Panel
  - Visualization
  - Gaode
  - Maps
---

# Gaode Maps

:::info

Supported since Apache ECharts visualization panel 3.8.0.

:::

Gaode Maps are loaded using API v1.4.15 and require Access Key. You can get it from [https://console.amap.com/dev/key/app](https://console.amap.com/dev/key/app).

- Loading Gaode Maps takes ~2-3 seconds.
- There is no Callback function. The status should be checked using timeout.
- While loading, animation can be displayed using the code below.
- Additional plugins can be loaded using panel options.

![Gaode Maps](../img/gaode.png)

## Function

```javascript
const amap = {
  backgroundColor: 'transparent',
  amap: {
    viewMode: '3D',
    center: [108.39, 39.9],
    zoom: 4,
    resizeEnable: true,
    mapStyle: 'amap://styles/dark',
    renderOnMoving: true,
    echartsLayerInteractive: true,
    largeMode: false
  },
  series: [
    {
      type: 'scatter',
      coordinateSystem: 'amap',
      data: [[120, 30, 8], [120.1, 30.2, 20]],
      encode: {
        value: 2
      }
    }
  ]
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
amapReady = () => {
  if (!window.AMap) {
    return setTimeout(() => {
      amapReady();
    }, 100)
  }

  notifySuccess(['Gaode Maps', 'Loaded...']);
  echartsInstance.setOption(amap, notmerge = true);

  /**
   * Get AMap extension component
   */
  const amapComponent = echartsInstance.getModel().getComponent('amap');
  const amapInstance = amapComponent.getAMap();
  amapInstance.addControl(new AMap.Scale());
  amapInstance.addControl(new AMap.ToolBar());

  /**
   * Add SatelliteLayer and RoadNetLayer to map
   */
  const satelliteLayer = new AMap.TileLayer.Satellite();
  const roadNetLayer = new AMap.TileLayer.RoadNet();
  amapInstance.add([satelliteLayer, roadNetLayer]);

  return;
}

setTimeout(() => {
  amapReady();
}, 100)

return loading;
```
