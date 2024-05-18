let names = [];
let amounts = [];

context.panel.data.series.map((s) => {
  names =
    s.fields.find((f) => f.name === "Name").values ||
    s.fields.find((f) => f.name === "Name").values;
  namesOrder = s.fields.find((f) => f.name === "Name").values;
  amounts =
    s.fields.find((f) => f.name === "Amount").values ||
    s.fields.find((f) => f.name === "Amount").values;
  amountsOrder = s.fields.find((f) => f.name === "Amount").values.order;
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
  legend: {
    data: [context.grafana.replaceVariables("$var")],
  },
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
