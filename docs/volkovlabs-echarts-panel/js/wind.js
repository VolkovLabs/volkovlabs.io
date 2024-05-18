let wind;
context.panel.data.series.map((s) => {
  const time =
    s.fields.find((f) => f.name === "Time").values.buffer ||
    s.fields.find((f) => f.name === "Time").values;
  const value =
    s.fields.find((f) => f.name === "Speed").values.buffer ||
    s.fields.find((f) => f.name === "Speed").values;
  const rotate =
    s.fields.find((f) => f.name === "Direction").values.buffer ||
    s.fields.find((f) => f.name === "Direction").values;

  /**
  Set Wind from 3 arrays
  */
  wind = time.map((id, index) => {
    return { symbolRotate: rotate[index], value: [time[index], value[index]] };
  });
});

return {
  xAxis: {
    type: "time",
  },
  yAxis: {
    type: "value",
  },
  visualMap: {
    orient: "horizontal",
    left: "center",
    min: 0,
    max: 10,
    text: ["High", "Low"],
    dimension: 1,
    inRange: {
      color: ["#65B581", "#FFCE34", "#FD665F"],
    },
  },
  series: [
    {
      data: wind,
      type: "line",
      symbol:
        "path://M31 24.7343L21.7917 24.7343V0L9.20826 0L9.20826 24.7343H0L15.5 45L31 24.7343Z",
      symbolSize: 20,
      lineStyle: {
        width: 0.3,
      },
    },
  ],
};
