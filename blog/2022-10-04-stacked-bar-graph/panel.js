const series = data.series.map((s) => {
  let sData = s.fields.find((f) => f.type === "number").values.buffer;

  // Move 'Grid Feed' to the negative quadrant
  if (s.refId === "A") {
    sData = sData.map(function (x) {
      return x * -1.0;
    });
  }

  // It seems that ECharts is no friend of Unix timestamps
  // Use JS date and set the hours to 0 since we are interested
  // in the entire day
  let sTime = s.fields.find((f) => f.type === "time").values.buffer;
  sTime = sTime.map(function (x) {
    // Move back 1 ms to avoid the overflow to the next day
    x -= 1;
    const tmpDate = new Date(x);
    return tmpDate.setHours(0, 0, 0, 0);
  });

  return {
    name: s.fields[1].labels.Source,
    type: "bar",
    stack: "total",
    // 'createEmpty: true' is needed to align the bars in case of missing values
    // but creates 'null' values in the data and eCharts fails
    // Make sure to catch the null values via 'd ? d.toFixed(2) : 0'
    data: sData.map((d, i) => [sTime[i], d ? d.toFixed(2) : 0]),
  };
});

// Debug
//console.log('series');
//console.log(series);

const axisOptionX = {
  axisLabel: {
    // Should show all category values on the x-Axis but
    // does not work
    interval: 0,
    color: "rgba(128, 128, 128, .9)",
  },
  formatter: "{d}",
  axisLine: {
    show: false,
    onZero: false,
  },
  splitLine: {
    lineStyle: {
      color: "rgba(128, 128, 128, .2)",
    },
  },
  // Work around the 'interval: 0' issue
  // Potentially causes issues for low data count
  splitNumber: 31,
  boundaryGap: true,
  axisTick: {
    show: false,
    interval: 0,
    alignWithLabel: true,
  },
};

const axisOptionY = {
  axisLabel: {
    formatter: function (value) {
      // 'toLocaleString' applies internationalization to the
      // number format, e.g. thousands separator
      return value.toLocaleString() + " Wh";
    },
    color: "rgba(128, 128, 128, .9)",
  },
  axisTick: {
    show: false,
  },
  axisLine: {
    show: false,
  },
  splitLine: {
    lineStyle: {
      color: "rgba(128, 128, 128, .2)",
    },
  },
};

return {
  color: [
    "#27727b", // Series A
    "#c23531", // Series B
    "#9bca63", // Series C
  ],
  backgroundColor: "transparent",
  tooltip: {
    trigger: "axis",
    valueFormatter: function (value) {
      return (value / 1000.0).toFixed(2).toLocaleString() + " kWh";
    },
    axisPointer: {
      type: "shadow",
      label: {
        // For whatever reason axisPointer.label sets the tooltip "heading"
        formatter: function (params) {
          const tmpDate = new Date(params.value);
          const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          return tmpDate.toLocaleDateString("en-EN", options);
        },
      },
    },
  },
  legend: {
    left: "0",
    bottom: "0",
    textStyle: {
      color: "rgba(128, 128, 128, .9)",
    },
  },
  xAxis: Object.assign(
    {
      type: "time",
    },
    axisOptionX
  ),
  yAxis: Object.assign(
    {
      type: "value",
    },
    axisOptionY
  ),
  grid: {
    left: 10,
    right: 10,
    top: 6,
    bottom: 24,
    containLabel: true,
  },
  series,
};
