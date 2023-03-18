let nodes, links;
/**
 * Data Source data
 */
data.series.map((s) => {
  if (s.refId === "nodes") {
    var titles = s.fields.find((f) => f.name === "sIp").values.buffer;
    var symbolSizes = s.fields.find((f) => f.name === "bytes").values.buffer;
    var categories = s.fields.find((f) => f.name === "Count").values.buffer;

    nodes = titles.map((title, i) => ({
      name: title,
      symbolSize: symbolSizes[i],
      value: symbolSizes[i],
      category: categories[i],
      label: {
        show: symbolSizes[i] > 1,
      },
    }));
  }

  if (s.refId === "links") {
    var sources = s.fields.find((f) => f.name === "sIp").values.buffer;
    var targets = s.fields.find((f) => f.name === "dIp").values.buffer;

    links = sources.map((source, i) => ({
      source: source,
      target: targets[i],
    }));
  }
});

/**
 * Categories
 */
const categories = [{ name: "1" }, { name: "2" }, { name: "3" }];

return {
  tooltip: {},
  legend: [
    {
      data: categories.map((a) => a.name),
    },
  ],
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  series: [
    {
      name: "Net flow",
      type: "graph",
      layout: "circular",
      circular: {
        rotateLabel: true,
      },
      data: nodes,
      links: links,
      categories: categories,
      roam: true,
      label: {
        position: "right",
        formatter: "{b}",
      },
      lineStyle: {
        color: "source",
        curveness: 0.3,
      },
    },
  ],
};
