/**
 * Grafana
 */
const grafana = {
  items: [
    "grafana/index",
    {
      items: [
        "grafana/allow-unsigned",
        "grafana/customize",
        "grafana/variables",
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
  collapsible: false,
};

module.exports = grafana;
