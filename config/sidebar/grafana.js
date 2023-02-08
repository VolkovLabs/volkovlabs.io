/**
 * Grafana
 */
const grafana = {
  items: [
    "grafana/index",
    "grafana/customize",
    "grafana/variables",
    "grafana/business",
    "grafana/iot",
    "grafana/allow-unsigned",
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
