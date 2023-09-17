const series = data.series.map((s) => {
  const sData =
    s.fields.find((f) => f.type === "number").values.buffer ||
    s.fields.find((f) => f.type === "number").values;
  const sTime =
    s.fields.find((f) => f.type === "time").values.buffer ||
    s.fields.find((f) => f.type === "time").values;

  return {
    type: "line",
    name: "Live",
    showSymbol: false,
    areaStyle: {
      opacity: 0.1,
    },
    lineStyle: {
      width: 1,
    },
    data: sData.map((d, i) => [sTime[i], d.toFixed(2)]),
  };
});

return {
  backgroundColor: "transparent",
  tooltip: {
    trigger: "axis",
  },
  legend: {
    left: "0",
    bottom: "0",
    textStyle: {
      color: "rgba(128, 128, 128, .9)",
    },
  },
  xAxis: {
    type: "time",
  },
  yAxis: {
    type: "value",
    min: "dataMin",
  },
  grid: {
    left: "2%",
    right: "2%",
    top: "2%",
    bottom: 24,
    containLabel: true,
  },
  series,
};
