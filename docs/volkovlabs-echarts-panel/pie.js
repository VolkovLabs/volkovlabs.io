const pieData = data.series.map((s) => {
  const models = s.fields.find((f) => f.name === "Model").values.buffer;
  const values = s.fields.find((f) => f.name === "Value").values.buffer;

  return values.map((d, i) => {
    return { name: models[i], value: d };
  });
})[0];

return {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Pie Chart",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: pieData,
    },
  ],
};
