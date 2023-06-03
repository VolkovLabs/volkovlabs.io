let names = [];
let amounts = [];
data.series.map((s) => {
  names =
    s.fields.find((f) => f.name === "Name").values.source.buffer ||
    s.fields.find((f) => f.name === "Name").values.source;
  namesOrder = s.fields.find((f) => f.name === "Name").values.order;
  amounts =
    s.fields.find((f) => f.name === "Amount").values.source.buffer ||
    s.fields.find((f) => f.name === "Amount").values.source;
  amountsOrder = s.fields.find((f) => f.name === "Amount").values.order;
});

const namesOrdered = namesOrder.map((i) => names[i]);
const amountsOrdered = amountsOrder.map((i) => amounts[i]);

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
    data: [replaceVariables("$var")],
  },
  xAxis: {
    data: namesOrdered,
  },
  yAxis: {},
  toolbox: { feature: { restore: {} } },
  series: [
    {
      name: replaceVariables("$var"),
      type: "bar",
      data: amountsOrdered,
    },
  ],
};
