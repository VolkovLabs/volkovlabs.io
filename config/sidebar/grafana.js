/**
 * Grafana
 */
const grafana = {
  items: [
    "grafana/index",
    {
      items: [
        "grafana/annotations",
        "grafana/customize",
        "grafana/variables",
        "grafana/allow-unsigned",
      ],
      label: "Features",
      type: "category",
    },
    {
      items: ["grafana/datasources/json"],
      label: "Data Sources",
      type: "category",
    },
    {
      items: ["grafana/business", "grafana/iot"],
      label: "Use Cases",
      type: "category",
    },
  ],
  label: "Grafana",
  type: "category",
  description: "The open observability platform.",
  link: {
    type: "doc",
    id: "grafana/index",
  },
  collapsible: false,
};

module.exports = grafana;
