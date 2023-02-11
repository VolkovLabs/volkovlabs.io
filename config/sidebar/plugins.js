/**
 * Plugins
 */
const plugins = {
  items: [
    {
      id: "intro",
      type: "doc",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-echarts-panel/index",
          label: "Introduction",
        },
        "volkovlabs-echarts-panel/options",
        "volkovlabs-echarts-panel/examples",
        {
          items: [
            "volkovlabs-echarts-panel/datasources",
            "volkovlabs-echarts-panel/events",
            "volkovlabs-echarts-panel/instance",
            "volkovlabs-echarts-panel/streaming",
            "volkovlabs-echarts-panel/variables",
          ],
          label: "Features",
          type: "category",
        },
        {
          items: [
            "volkovlabs-echarts-panel/maps/geojson",
            "volkovlabs-echarts-panel/maps/baidu",
            "volkovlabs-echarts-panel/maps/gaode",
            "volkovlabs-echarts-panel/maps/google",
          ],
          label: "Maps",
          type: "category",
        },
        {
          items: [
            "volkovlabs-echarts-panel/tutorials/graph",
            "volkovlabs-echarts-panel/tutorials/images",
            "volkovlabs-echarts-panel/tutorials/ecstat",
          ],
          label: "Tutorials",
          type: "category",
        },
        "volkovlabs-echarts-panel/release",
      ],
      label: "Apache ECharts Panel",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-balena-app/index",
          label: "Introduction",
        },
        "volkovlabs-balena-app/balenaCloud",
        {
          type: "link",
          label: "balenaHub",
          href: "https://hub.balena.io/organizations/volkovlabs/apps/balena-app",
        },
        "volkovlabs-balena-app/provisioning",
        "volkovlabs-balena-app/release",
      ],
      label: "Balena Application",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-image-panel/index",
          label: "Introduction",
        },
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
        {
          type: "doc",
          id: "volkovlabs-calendar-panel/index",
          label: "Introduction",
        },
        "volkovlabs-calendar-panel/events",
        "volkovlabs-calendar-panel/release",
      ],
      label: "Calendar Panel",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-dynamictext-panel/index",
          label: "Introduction",
        },
        "volkovlabs-dynamictext-panel/content",
        "volkovlabs-dynamictext-panel/data",
        "volkovlabs-dynamictext-panel/code",
        "volkovlabs-dynamictext-panel/helpers",
        "volkovlabs-dynamictext-panel/recipes",
        "volkovlabs-dynamictext-panel/release",
      ],
      label: "Dynamic Text Panel",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-form-panel/index",
          label: "Introduction",
        },
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
        {
          type: "doc",
          id: "volkovlabs-env-datasource/index",
          label: "Introduction",
        },
        "volkovlabs-env-datasource/provisioning",
        "volkovlabs-env-datasource/release",
      ],
      label: "Environment Data Source",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-rss-datasource/index",
          label: "Introduction",
        },
        "volkovlabs-rss-datasource/provisioning",
        "volkovlabs-rss-datasource/release",
      ],
      label: "RSS/Atom Data Source",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-static-datasource/index",
          label: "Introduction",
        },
        "volkovlabs-static-datasource/provisioning",
        "volkovlabs-static-datasource/variables",
        "volkovlabs-static-datasource/release",
      ],
      label: "Static Data Source",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-app/index",
          label: "Introduction",
        },
        "volkovlabs-app/release",
      ],
      label: "Volkov Labs Application",
      type: "category",
    },
  ],
  label: "Grafana Plugins",
  type: "category",
  collapsible: false,
};

module.exports = plugins;
