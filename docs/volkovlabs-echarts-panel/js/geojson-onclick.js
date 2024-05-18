/**
 * All countries map
 *
 * @url https://github.com/codeforgermany/click_that_hood/tree/main/public/data
 */
const allCountriesMap = {
  Brazil:
    "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson",
  Mexico:
    "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/mexico.geojson",
  "United States": "/public/plugins/volkovlabs-echarts-panel/maps/USA.json",
};

/**
 * Timeout to process Double Click
 */
let timeFn = null;

/**
 * On Mouse Click
 */
context.panel.chart.on("click", (params) => {
  clearTimeout(timeFn);

  /**
   * Time out to allow double click
   */
  timeFn = setTimeout(function () {
    var name = params.name;
    var mapCode = allCountriesMap[name];

    /**
     * Map is not found in the list
     */
    if (!mapCode) {
      alert("Not found!");
      return;
    }

    /**
     * Register and Load Map
     * Resize is required to redraw
     */
    if (mapCode) {
      return $.get(mapCode, (data) => {
        context.echarts.registerMap(name, data);
        context.panel.chart.setOption(loadMap(name));
        context.panel.chart.resize();
      });
    }

    /**
     * Load and redraw World Map
     */
    context.panel.chart.setOption(loadMap(name));
    context.panel.chart.resize();
  }, 250);
});

/**
 * On Double click go back to World Map
 */
context.panel.chart.on("dblclick", (params) => {
  clearTimeout(timeFn);
  context.panel.chart.setOption(loadMap("world"));
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
      text: "Click to see closer",
      subtext: "Double click to go back to World Map",
      left: "right",
    },
    visualMap: {
      left: "right",
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
      text: ["High", "Low"],
      calculable: true,
    },
    geo: {
      type: "map",
      map: name, // dynamic load map
      roam: false,
    },
    series: [
      {
        data: [
          { name: "Brazil", value: 100 },
          { name: "United States", value: 100 },
          { name: "Mexico", value: 100 },
        ],
        geoIndex: 0,
        type: "map",
      },
    ],
  };
};

/**
 * Load World Map
 */
return loadMap("world");
