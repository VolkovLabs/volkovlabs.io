import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebars
 */
const sidebars: SidebarsConfig = {
  plugins: [
    {
      items: ["security/index"],
      label: "Business Suite",
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
          id: "volkovlabs-calendar-panel/index",
          label: "Introduction",
        },
        "volkovlabs-calendar-panel/events",
        {
          items: [
            "volkovlabs-calendar-panel/annotations",
            "volkovlabs-calendar-panel/big",
            "volkovlabs-calendar-panel/color",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "volkovlabs-calendar-panel/features",
          },
        },
        "volkovlabs-calendar-panel/release",
      ],
      label: "Business Calendar",
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
            "volkovlabs-echarts-panel/visualeditor",
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
        "volkovlabs-echarts-panel/release",
      ],
      label: "Business Charts",
      type: "category",
      description:
        "Powerful visualizations for Grafana powered by Apache ECharts.",
      link: {
        type: "doc",
        id: "volkovlabs-echarts-panel/index",
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
            "volkovlabs-form-panel/load",
            "volkovlabs-form-panel/confirm-window",
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
        "volkovlabs-form-panel/release",
      ],
      label: "Business Forms",
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
          id: "volkovlabs-image-panel/index",
          label: "Introduction",
        },
        "volkovlabs-image-panel/formats",
        "volkovlabs-image-panel/options",
        {
          items: [
            "volkovlabs-image-panel/datasources",
            "volkovlabs-image-panel/variables",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "volkovlabs-image-panel/features",
          },
        },
        "volkovlabs-image-panel/release",
      ],
      label: "Business Image/PDF",
      type: "category",
      description: "Display Base64 encoded media files.",
      link: {
        type: "doc",
        id: "volkovlabs-image-panel/index",
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
            "volkovlabs-static-datasource/panels/business-charts",
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
      label: "Business Input Data Source",
      type: "category",
      description: "Store and create your data.",
      link: {
        type: "doc",
        id: "volkovlabs-static-datasource/index",
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
      label: "Business News Data Source",
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
        "volkovlabs-grapi-datasource/release",
      ],
      label: "Business Satellite Data Source",
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
            "volkovlabs-dynamictext-panel/standard",
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
        "volkovlabs-dynamictext-panel/release",
      ],
      label: "Business Text",
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
          id: "volkovlabs-variable-panel/index",
          label: "Introduction",
        },
        {
          items: [
          ],
          label: "Data Flow",
          type: "category",
          link: {
            type: "doc",
            id: "volkovlabs-variable-panel/data-flow",
          },
        },
        {
          items: [
            "volkovlabs-variable-panel/table",
            "volkovlabs-variable-panel/minimize",
            "volkovlabs-variable-panel/button",
            "volkovlabs-variable-panel/slider",
          ],
          label: "Display Mode",
          type: "category",
          link: {
            type: "doc",
            id: "volkovlabs-variable-panel/layout",
          },
        },
        {
          items: [
            "volkovlabs-variable-panel/sort",
            "volkovlabs-variable-panel/key",
            "volkovlabs-variable-panel/empty",
            "volkovlabs-variable-panel/persistent",
            "volkovlabs-variable-panel/redirect",
            "volkovlabs-variable-panel/input",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "volkovlabs-variable-panel/features",
          },
        },
        "volkovlabs-variable-panel/release",
      ],
      label: "Business Variable",
      type: "category",
      description: "Update dashboard variables.",
      link: {
        type: "doc",
        id: "volkovlabs-variable-panel/index",
      },
    },
  ],
};

export default sidebars;
