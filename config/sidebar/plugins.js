/**
 * Plugins
 */
const plugins = {
  items: [
    {
      id: "index",
      label: "What's new",
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
            "volkovlabs-echarts-panel/annotations",
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
      description:
        "Powerful charting and visualization library Apache ECharts.",
      link: {
        type: "doc",
        id: "volkovlabs-echarts-panel/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-image-panel/index",
          label: "Introduction",
        },
        "volkovlabs-image-panel/formats",
        {
          items: [
            "volkovlabs-image-panel/datasources",
            "volkovlabs-image-panel/variables",
          ],
          label: "Features",
          type: "category",
        },
        "volkovlabs-image-panel/release",
      ],
      label: "Base64 Image/PDF Panel",
      type: "category",
      description:
        "Display Base64 encoded files in PNG, JPG, GIF, MP4, WEBM, MP3, OGG, PDF formats.",
      link: {
        type: "doc",
        id: "volkovlabs-image-panel/index",
      },
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
      description: "Display calendar events and change time range.",
      link: {
        type: "doc",
        id: "volkovlabs-calendar-panel/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-dynamictext-panel/index",
          label: "Introduction",
        },
        "volkovlabs-dynamictext-panel/content",
        "volkovlabs-dynamictext-panel/recipes",
        {
          items: [
            "volkovlabs-dynamictext-panel/data",
            "volkovlabs-dynamictext-panel/code",
            "volkovlabs-dynamictext-panel/helpers",
            "volkovlabs-dynamictext-panel/diagram",
            "volkovlabs-dynamictext-panel/styles",
            "volkovlabs-dynamictext-panel/variables",
          ],
          label: "Features",
          type: "category",
        },
        "volkovlabs-dynamictext-panel/release",
      ],
      label: "Dynamic Text Panel",
      type: "category",
      description: "Dynamic, data-driven text.",
      link: {
        type: "doc",
        id: "volkovlabs-dynamictext-panel/index",
      },
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
        {
          items: [
            "volkovlabs-form-panel/control",
            "volkovlabs-form-panel/request",
            "volkovlabs-form-panel/dynamic",
            "volkovlabs-form-panel/variables",
          ],
          label: "Features",
          type: "category",
        },
        {
          items: [
            "volkovlabs-form-panel/servers/deno",
            "volkovlabs-form-panel/servers/influx",
            "volkovlabs-form-panel/servers/json",
            "volkovlabs-form-panel/servers/mysql",
            "volkovlabs-form-panel/servers/postgresql",
          ],
          label: "Servers",
          type: "category",
        },
        "volkovlabs-form-panel/release",
      ],
      label: "Data Manipulation Panel",
      type: "category",
      description: "Insert, update application data, and modify configuration.",
      link: {
        type: "doc",
        id: "volkovlabs-form-panel/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-env-datasource/index",
          label: "Introduction",
        },
        "volkovlabs-env-datasource/deployment",
        "volkovlabs-env-datasource/provisioning",
        {
          items: ["volkovlabs-env-datasource/variables"],
          label: "Features",
          type: "category",
        },
        "volkovlabs-env-datasource/release",
      ],
      label: "Environment Data Source",
      type: "category",
      description: "Environment variables on your dashboard.",
      link: {
        type: "doc",
        id: "volkovlabs-env-datasource/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-grapi-datasource/index",
          label: "Introduction",
        },
        "volkovlabs-grapi-datasource/configuration",
        "volkovlabs-grapi-datasource/provisioning",
        {
          items: ["volkovlabs-grapi-datasource/annotations"],
          label: "Features",
          type: "category",
        },
        "volkovlabs-grapi-datasource/release",
      ],
      label: "Grafana API Data Source",
      type: "category",
      description: "Connect to Local and Remote Grafana instances.",
      link: {
        type: "doc",
        id: "volkovlabs-grapi-datasource/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-rss-datasource/index",
          label: "Introduction",
        },
        "volkovlabs-rss-datasource/text",
        "volkovlabs-rss-datasource/provisioning",
        "volkovlabs-rss-datasource/release",
      ],
      label: "RSS/Atom Data Source",
      type: "category",
      description: "Visualize RSS/Atom feeds using Dynamic Text.",
      link: {
        type: "doc",
        id: "volkovlabs-rss-datasource/index",
      },
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
        {
          items: [
            "volkovlabs-static-datasource/panels/image",
            "volkovlabs-static-datasource/panels/logs",
            "volkovlabs-static-datasource/panels/graph",
            "volkovlabs-static-datasource/panels/pie",
          ],
          label: "Panels",
          type: "category",
        },
        "volkovlabs-static-datasource/release",
      ],
      label: "Static Data Source",
      type: "category",
      description: "Store and emulate your data.",
      link: {
        type: "doc",
        id: "volkovlabs-static-datasource/index",
      },
    },
  ],
  label: "Grafana Plugins",
  type: "category",
  description: "Our plugins are open-source and we update them constantly.",
  link: {
    type: "doc",
    id: "index",
  },
  collapsible: false,
};

module.exports = plugins;
