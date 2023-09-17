let sData = [];
const series = data.series.map((s) => {
  sData = s.fields.find((f) => f.type === "number").values;
});

return {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      detail: {
        formatter: "{value}",
      },
      data: [
        {
          value: Math.round(sData[sData.length - 1] * 100) / 100,
          name: "SCORE",
        },
      ],
    },
  ],
};
