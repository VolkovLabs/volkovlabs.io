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
      label: "Home",
      type: "doc",
    },
    {
      items: [
        "grafana/index",
        "grafana/business",
        "grafana/allow-unsigned",
        "grafana/customize",
      ],
      label: "Grafana",
      type: "category",
    },
    {
      items: [
        {
          items: [
            "volkovlabs-echarts-panel/index",
            "volkovlabs-echarts-panel/options",
            "volkovlabs-echarts-panel/tutorial",
            "volkovlabs-echarts-panel/examples",
            {
              items: [
                "volkovlabs-echarts-panel/maps/baidu",
                "volkovlabs-echarts-panel/maps/gaode",
                "volkovlabs-echarts-panel/maps/google",
              ],
              label: "Maps",
              type: "category",
            },
            "volkovlabs-echarts-panel/release",
          ],
          label: "Apache ECharts Panel",
          type: "category",
        },
        {
          items: [
            "volkovlabs-balena-app/index",
            "volkovlabs-balena-app/balenaCloud",
            "volkovlabs-balena-app/release",
          ],
          label: "Balena Application",
          type: "category",
        },
        "volkovlabs-image-panel/index",
        {
          items: [
            "volkovlabs-calendar-panel/index",
            "volkovlabs-calendar-panel/release",
          ],
          label: "Calendar Panel",
          type: "category",
        },
        {
          items: [
            "volkovlabs-dynamictext-panel/index",
            "volkovlabs-dynamictext-panel/helpers",
            "volkovlabs-dynamictext-panel/recipes",
            "volkovlabs-dynamictext-panel/release",
          ],
          label: "Dynamic Text Panel",
          type: "category",
        },
        {
          items: [
            "volkovlabs-form-panel/index",
            "volkovlabs-form-panel/architecture",
            "volkovlabs-form-panel/code",
            "volkovlabs-form-panel/request",
            "volkovlabs-form-panel/dynamic",
            "volkovlabs-form-panel/release",
          ],
          label: "Data Manipulation Panel",
          type: "category",
        },
        "volkovlabs-env-datasource/index",
        "volkovlabs-rss-datasource/index",
        "volkovlabs-static-datasource/index",
      ],
      label: "Plugins",
      type: "category",
      collapsible: false,
    },
    {
      items: [
        {
          items: ["balena-nfs/index", "balena-nfs/balenaCloud"],
          label: "Balena NFS",
          type: "category",
        },
        "volkovlabs-app/index",
      ],
      label: "Projects",
      type: "category",
    },
    {
      items: [
        "volkovlabs-abc-app/index",
        "volkovlabs-abc-datasource/index",
        "volkovlabs-abc-panel/index",
      ],
      label: "Templates for Development",
      type: "category",
    },
  ],
};

module.exports = sidebars;
