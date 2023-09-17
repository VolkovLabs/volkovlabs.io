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

/**
 * Maps are Ready
 */
window.bmapReady = () => {
  notifySuccess(["Baidu Maps", "Loaded..."]);
  echartsInstance.setOption(bmap, (notmerge = true));
};

return window.BMap ? bmap : loading;
