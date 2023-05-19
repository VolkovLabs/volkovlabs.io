let latitudes = [];
let longitude = [];
let values = [];

/**
 * Data Source
 */
data.series.map((s) => {
  latitudes = s.fields.find((f) => f.name === "latitude").values.buffer;
  longitudes = s.fields.find((f) => f.name === "longitude").values.buffer;
  values = s.fields.find((f) => f.name === "value").values.buffer;
});

/**
 * Lines
 */
const lines = longitudes.map((longitude, i) => [longitude, latitudes[i]]);

/**
 * Series
 */
const series = latitudes.map((latitude, i) => {
  return {
    type: "scatter",
    coordinateSystem: "geo",
    data: [[longitudes[i], latitude, values[i]]],
    encode: {
      value: 2,
      lng: 0,
      lat: 1,
    },
  };
});

/**
 * ECharts
 */
return {
  geo: {
    map: "USA",
    roam: true,
    itemStyle: {
      areaColor: "#e7e8ea",
    },
  },
  tooltip: {},
  legend: {},
  series: [
    ...series,
    {
      name: "Route",
      type: "lines",
      coordinateSystem: "geo",
      geoIndex: 0,
      emphasis: {
        label: {
          show: false,
        },
      },
      lineStyle: {
        color: "#c46e54",
        width: 5,
        opacity: 1,
        type: "dotted",
      },
      data: [
        {
          coords: lines,
        },
      ],
    },
  ],
};
