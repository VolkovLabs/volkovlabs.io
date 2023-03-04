visualMap: [
  {
    type: "continuous",
    left: "center",
    bottom: "0%",
    min: 0,
    max: 30,
    range: [
      replaceVariables("$datarangeStart"),
      replaceVariables("$datarangeEnd"),
    ],
    orient: "horizontal",
    text: ["", "Occupancy"],
    realtime: true,
    calculable: true,
    dimension: 0,
    inRange: {
      color: ["#ffffff", "#0000ff", "#ffff00", "#ff00ff"],
    },
  },
];
