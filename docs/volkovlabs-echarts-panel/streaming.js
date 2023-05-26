const values = {};
const series = data.series.map((s) => {
  names = s.fields.find((f) => f.name === "name").values.buffer;
  amounts = s.fields.find((f) => f.name === "amount").values.buffer;

  names.forEach((d, i) => (values[d] = amounts[i]));
});

return {
  grid: {
    bottom: "3%",
    containLabel: true,
    left: "3%",
    right: "4%",
    top: "4%",
  },
  animation: false,
  tooltip: {},
  xAxis: {
    data: Object.keys(values),
  },
  yAxis: {},
  series: [
    {
      name: "Streaming",
      type: "bar",
      data: Object.values(values),
    },
  ],
};
