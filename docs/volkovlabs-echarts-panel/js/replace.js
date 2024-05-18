let names = [];
let amounts = [];

context.panel.data.series.map((s) => {
  names =
    s.fields.find((f) => f.name === "Name").values.buffer ||
    s.fields.find((f) => f.name === "Name").values;
  amounts =
    s.fields.find((f) => f.name === "Amount").values.buffer ||
    s.fields.find((f) => f.name === "Amount").values;
});

return {
  grid: {
    bottom: "3%",
    containLabel: true,
    left: "3%",
    right: "4%",
    top: "4%",
  },
  tooltip: {},
  legend: {},
  xAxis: {
    data: names,
  },
  yAxis: {},
  toolbox: { feature: { restore: {} } },
  series: [
    {
      name: context.grafana.replaceVariables("$var"),
      type: "bar",
      data: amounts,
    },
  ],
};
