/**
 * Grafana
 */
const grafana = {
  items: [
    "grafana/index",
    "grafana/customize",
    "grafana/allow-unsigned",
    "grafana/variables",
    {
      items: ["grafana/business", "grafana/iot"],
      label: "Use Cases",
      type: "category",
    },
    {
      items: ["grafana/datasources/json"],
      label: "Data Sources",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-abc-app/index",
          label: "Application",
        },
        {
          type: "doc",
          id: "volkovlabs-abc-datasource/index",
          label: "Data Source",
        },
        {
          type: "doc",
          id: "volkovlabs-abc-panel/index",
          label: "Panel",
        },
      ],
      label: "Templates for Development",
      type: "category",
    },
  ],
  label: "Grafana",
  type: "category",
};

module.exports = grafana;
