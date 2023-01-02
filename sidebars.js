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
      label: "What's new",
      type: "doc",
    },
    {
      items: [
        "grafana/index",
        "grafana/business",
        "grafana/iot",
        "grafana/allow-unsigned",
        "grafana/customize",
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
      label: "Grafana",
      type: "category",
    },
    {
      items: [
        {
          id: "intro",
          type: "doc",
        },
        {
          items: [
            "volkovlabs-echarts-panel/index",
            "volkovlabs-echarts-panel/options",
            "volkovlabs-echarts-panel/datasources",
            {
              type: "link",
              label: "Examples",
              href: "https://echarts.volkovlabs.io",
            },
            "volkovlabs-echarts-panel/ecstat",
            {
              items: [
                "volkovlabs-echarts-panel/maps/baidu",
                "volkovlabs-echarts-panel/maps/gaode",
                "volkovlabs-echarts-panel/maps/google",
              ],
              label: "Maps",
              type: "category",
            },
            "volkovlabs-echarts-panel/tutorial",
            "volkovlabs-echarts-panel/variables",
            "volkovlabs-echarts-panel/release",
          ],
          label: "Apache ECharts Panel",
          type: "category",
        },
        {
          items: [
            "volkovlabs-balena-app/index",
            "volkovlabs-balena-app/balenaCloud",
            {
              type: "link",
              label: "balenaHub",
              href: "https://hub.balena.io/organizations/volkovlabs/apps/balena-app",
            },
            "volkovlabs-balena-app/release",
          ],
          label: "Balena Application",
          type: "category",
        },
        {
          items: [
            "volkovlabs-image-panel/index",
            "volkovlabs-image-panel/datasources",
            "volkovlabs-image-panel/formats",
            "volkovlabs-image-panel/variables",
            "volkovlabs-image-panel/release",
          ],
          label: "Base64 Image/PDF Panel",
          type: "category",
        },
        {
          items: [
            "volkovlabs-calendar-panel/index",
            "volkovlabs-calendar-panel/events",
            "volkovlabs-calendar-panel/release",
          ],
          label: "Calendar Panel",
          type: "category",
        },
        {
          items: [
            "volkovlabs-dynamictext-panel/index",
            "volkovlabs-dynamictext-panel/content",
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
            "volkovlabs-form-panel/control",
            "volkovlabs-form-panel/request",
            "volkovlabs-form-panel/dynamic",
            "volkovlabs-form-panel/variables",
            "volkovlabs-form-panel/release",
          ],
          label: "Data Manipulation Panel",
          type: "category",
        },
        {
          items: [
            "volkovlabs-env-datasource/index",
            "volkovlabs-env-datasource/release",
          ],
          label: "Environment Data Source",
          type: "category",
        },
        {
          items: [
            "volkovlabs-rss-datasource/index",
            "volkovlabs-rss-datasource/release",
          ],
          label: "RSS/Atom Data Source",
          type: "category",
        },
        {
          items: [
            "volkovlabs-static-datasource/index",
            "volkovlabs-static-datasource/provisioning",
            "volkovlabs-static-datasource/variables",
            "volkovlabs-static-datasource/release",
          ],
          label: "Static Data Source",
          type: "category",
        },
        {
          items: ["volkovlabs-app/index", "volkovlabs-app/release"],
          label: "Volkov Labs Application",
          type: "category",
        },
      ],
      label: "Grafana Plugins",
      type: "category",
      collapsible: false,
    },
    {
      items: [
        {
          items: [
            "balena-nfs/index",
            "balena-nfs/balenaCloud",
            {
              type: "link",
              label: "balenaHub",
              href: "https://hub.balena.io/organizations/volkovlabs/apps/balena-nfs",
            },
            "balena-nfs/release",
          ],
          label: "Balena NFS",
          type: "category",
        },
        {
          type: "link",
          label: "Demo Server",
          href: "https://demo.volkovlabs.io",
        },
        {
          type: "link",
          label: "ECharts Examples",
          href: "https://echarts.volkovlabs.io",
        },
        {
          type: "link",
          label: "Live Updates",
          href: "https://live.volkovlabs.io",
        },
      ],
      label: "Projects",
      type: "category",
    },
  ],
};

module.exports = sidebars;
