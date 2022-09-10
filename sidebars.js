// @ts-check

/**
 * Sidebar
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mySidebar: [
    {
      id: "index",
      label: "Private Repository",
      type: "doc",
    },
    {
      items: [
        "grafana",
        "grafana-customize/index",
        "grafana-allow-unsigned/index",
      ],
      label: "Grafana",
      type: "category",
    },
    {
      items: [
        "volkovlabs-echarts-panel/index",
        "volkovlabs-balena-app/index",
        "volkovlabs-image-panel/index",
        "volkovlabs-form-panel/index",
        "volkovlabs-env-datasource/index",
        "volkovlabs-rss-datasource/index",
      ],
      label: "Portfolio",
      type: "category",
    },
    {
      items: ["balena-nfs/index", "theiascope/index"],
      label: "Projects",
      type: "category",
    },
    {
      items: [
        "volkovlabs-abc-app/index",
        "volkovlabs-abc-datasource/index",
        "volkovlabs-abc-panel/index",
      ],
      label: "Development Templates",
      type: "category",
    },
  ],
};

module.exports = sidebars;
