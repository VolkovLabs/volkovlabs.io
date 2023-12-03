/**
 * Sidebar
 */
const mySidebar = [
  {
    items: ["security/index"],
    label: "Plugins",
    type: "category",
    collapsible: false,
    link: {
      type: "doc",
      id: "index",
    },
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
          "volkovlabs-echarts-panel/extended",
          "volkovlabs-echarts-panel/eventbus",
          "volkovlabs-echarts-panel/streaming",
          "volkovlabs-echarts-panel/theme",
          "volkovlabs-echarts-panel/transformations",
          "volkovlabs-echarts-panel/variables",
        ],
        label: "Features",
        type: "category",
        link: {
          type: "doc",
          id: "volkovlabs-echarts-panel/features",
        },
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
        link: {
          type: "doc",
          id: "volkovlabs-echarts-panel/maps/index",
        },
      },
      {
        items: [
          "volkovlabs-echarts-panel/tutorials/graph",
          "volkovlabs-echarts-panel/tutorials/images",
          "volkovlabs-echarts-panel/tutorials/ecstat",
        ],
        label: "Tutorials",
        type: "category",
        link: {
          type: "doc",
          id: "volkovlabs-echarts-panel/tutorials/index",
        },
      },
      {
        type: "link",
        href: "/blog/tags/apache-e-charts",
        label: "Related Blog posts",
      },
      "volkovlabs-echarts-panel/release",
    ],
    label: "Apache ECharts Panel",
    type: "category",
    description: "Powerful charting and visualization library Apache ECharts.",
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
          "volkovlabs-image-panel/toolbar",
          "volkovlabs-image-panel/variables",
        ],
        label: "Features",
        type: "category",
        link: {
          type: "doc",
          id: "volkovlabs-image-panel/features",
        },
      },
      {
        type: "link",
        href: "/blog/tags/base-64-image-video-audio-pdf",
        label: "Related Blog posts",
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
      {
        items: [
          "volkovlabs-calendar-panel/annotations",
          "volkovlabs-calendar-panel/big",
          "volkovlabs-calendar-panel/legacy",
          "volkovlabs-calendar-panel/color",
        ],
        label: "Features",
        type: "category",
        link: {
          type: "doc",
          id: "volkovlabs-calendar-panel/features",
        },
      },
      {
        type: "link",
        href: "/blog/tags/calendar",
        label: "Related Blog posts",
      },
      "volkovlabs-calendar-panel/release",
    ],
    label: "Calendar Panel",
    type: "category",
    description: "Display events and change time range.",
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
      {
        items: [
          "volkovlabs-dynamictext-panel/external",
          "volkovlabs-dynamictext-panel/code",
          "volkovlabs-dynamictext-panel/styles",
        ],
        label: "Rendering",
        type: "category",
        link: {
          type: "doc",
          id: "volkovlabs-dynamictext-panel/content",
        },
      },
      "volkovlabs-dynamictext-panel/recipes",
      {
        items: [
          "volkovlabs-dynamictext-panel/helpers",
          "volkovlabs-dynamictext-panel/eventbus",
          "volkovlabs-dynamictext-panel/status",
          "volkovlabs-dynamictext-panel/variables",
        ],
        label: "Features",
        type: "category",
        link: {
          type: "doc",
          id: "volkovlabs-dynamictext-panel/features",
        },
      },
      {
        type: "link",
        href: "/blog/tags/dynamic-text",
        label: "Related Blog posts",
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
      "volkovlabs-form-panel/data-flow",
      "volkovlabs-form-panel/form-elements",
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
        link: {
          type: "doc",
          id: "volkovlabs-form-panel/features",
        },
      },
      {
        items: [
          "volkovlabs-form-panel/servers/deno",
          "volkovlabs-form-panel/servers/influx",
          "volkovlabs-form-panel/servers/json",
          "volkovlabs-form-panel/servers/mysql",
          "volkovlabs-form-panel/servers/nodered",
          "volkovlabs-form-panel/servers/postgresql",
        ],
        label: "Servers",
        type: "category",
        link: {
          type: "doc",
          id: "volkovlabs-form-panel/servers/index",
        },
      },
      {
        type: "link",
        href: "/blog/tags/data-manipulation",
        label: "Related Blog posts",
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
        link: {
          type: "doc",
          id: "volkovlabs-env-datasource/features",
        },
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
        link: {
          type: "doc",
          id: "volkovlabs-grapi-datasource/features",
        },
      },
      {
        type: "link",
        href: "/blog/tags/grafana-http-api-data-source",
        label: "Related Blog posts",
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
        link: {
          type: "doc",
          id: "volkovlabs-static-datasource/panels",
        },
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
  {
    items: [
      {
        type: "doc",
        id: "volkovlabs-variable-panel/index",
        label: "Introduction",
      },
      {
        items: [
          "volkovlabs-variable-panel/select",
          "volkovlabs-variable-panel/input",
        ],
        label: "Layout",
        type: "category",
        link: {
          type: "doc",
          id: "volkovlabs-variable-panel/layout",
        },
      },
      {
        items: [
          "volkovlabs-variable-panel/favorites",
          "volkovlabs-variable-panel/groups",
          "volkovlabs-variable-panel/sort",
          "volkovlabs-variable-panel/key",
          "volkovlabs-variable-panel/empty",
          "volkovlabs-variable-panel/redirect",
        ],
        label: "Features",
        type: "category",
        link: {
          type: "doc",
          id: "volkovlabs-variable-panel/features",
        },
      },
      {
        type: "link",
        href: "/blog/tags/variables",
        label: "Related Blog posts",
      },
      "volkovlabs-variable-panel/release",
    ],
    label: "Variable Panel",
    type: "category",
    description: "Update dashboard variables.",
    link: {
      type: "doc",
      id: "volkovlabs-variable-panel/index",
    },
  },
];

/**
 * Sidebars
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mySidebar,
};

module.exports = sidebars;
