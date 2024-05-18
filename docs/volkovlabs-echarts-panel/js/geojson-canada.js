const mapName = "Canada";
const mapCode =
  "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/canada.geojson";

/**
 * Register Map
 */
$.get(mapCode, (data) => {
  context.echarts.registerMap(mapName, data);
  context.panel.chart.setOption(loadMap(mapName), (notmerge = true));
  context.panel.chart.resize();
});

/**
 * Load Map
 *
 * @returns object for setOption()
 */
const loadMap = (name) => {
  return {
    title: {
      text: mapName,
      left: "right",
    },
    geo: {
      map: name,
      roam: true,
    },
    series: [{}],
  };
};

/**
 * Loading
 */
const loading = {
  graphic: {
    elements: [
      {
        type: "group",
        left: "center",
        top: "center",
        children: new Array(7).fill(0).map((val, i) => ({
          type: "rect",
          x: i * 20,
          shape: {
            x: 0,
            y: -40,
            width: 10,
            height: 80,
          },
          style: {
            fill: "#5470c6",
          },
          keyframeAnimation: {
            duration: 1000,
            delay: i * 200,
            loop: true,
            keyframes: [
              {
                percent: 0.5,
                scaleY: 0.3,
                easing: "cubicIn",
              },
              {
                percent: 1,
                scaleY: 1,
                easing: "cubicOut",
              },
            ],
          },
        })),
      },
    ],
  },
};

return loading;
