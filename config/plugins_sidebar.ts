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
          id: "business-calendar/index",
          label: "Introduction",
        },
        "business-calendar/basic-config",
        {
          items: [
            "business-calendar/internationalization",
            "business-calendar/dashboard-timezones",
            "business-calendar/color",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "business-calendar/features",
          },
        },
        {
          items: [
            "business-calendar/main",
            "business-calendar/layout",
            "business-calendar/events",
            "business-calendar/annotations",
          ],
          label: "Sections",
          type: "category",
          link: {
            type: "doc",
            id: "business-calendar/sections",
          },
        },
        "business-calendar/release",
      ],
      label: "Business Calendar",
      type: "category",
      description: "Display events and set time range.",
      link: {
        type: "doc",
        id: "business-calendar/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "business-charts/index",
          label: "Introduction",
        },
        "business-charts/options",
        "business-charts/examples",
        {
          items: [
            "business-charts/annotations",
            "business-charts/datasources",
            "business-charts/events",
            "business-charts/instance",
            "business-charts/extended",
            "business-charts/eventbus",
            "business-charts/streaming",
            "business-charts/theme",
            "business-charts/transformations",
            "business-charts/variables",
            "business-charts/visualeditor",
            "business-charts/wordcloud",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "business-charts/features",
          },
        },
        {
          items: [
            "business-charts/maps/geojson",
            "business-charts/maps/baidu",
            "business-charts/maps/gaode",
            "business-charts/maps/google",
          ],
          label: "Maps",
          type: "category",
          link: {
            type: "doc",
            id: "business-charts/maps/index",
          },
        },
        {
          items: [
            "business-charts/tutorials/graph",
            "business-charts/tutorials/images",
            "business-charts/tutorials/ecstat",
          ],
          label: "Tutorials",
          type: "category",
          link: {
            type: "doc",
            id: "business-charts/tutorials/index",
          },
        },
        "business-charts/release",
      ],
      label: "Business Charts",
      type: "category",
      description:
        "Powerful visualizations for Grafana powered by Apache ECharts.",
      link: {
        type: "doc",
        id: "business-charts/index",
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
          id: "volkovlabs-static-datasource/index",
          label: "Introduction",
        },
        "volkovlabs-static-datasource/provisioning",
        "volkovlabs-static-datasource/variables",
        {
          items: [
            "volkovlabs-static-datasource/code",
            "volkovlabs-static-datasource/llm-app",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "volkovlabs-static-datasource/features",
          },
        },
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
      label: "Business Input",
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
      label: "Business Media",
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
          id: "volkovlabs-rss-datasource/index",
          label: "Introduction",
        },
        "volkovlabs-rss-datasource/text",
        "volkovlabs-rss-datasource/provisioning",
        "volkovlabs-rss-datasource/release",
      ],
      label: "Business News",
      type: "category",
      description: "Visualize RSS/Atom feeds using Business Text.",
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
      label: "Business Satellite",
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
          id: "business-text/index",
          label: "Introduction",
        },
        {
          items: [
            "business-text/code",
            "business-text/external",
            "business-text/styles",
          ],
          label: "Rendering",
          type: "category",
          link: {
            type: "doc",
            id: "business-text/content",
          },
        },
        "business-text/recipes",
        {
          items: [
            "business-text/helpers",
            "business-text/eventbus",
            "business-text/standard",
            "business-text/status",
            "business-text/variables",
            "business-text/wrap",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "business-text/features",
          },
        },
        "business-text/release",
      ],
      label: "Business Text",
      type: "category",
      description: "Dynamic, data-driven text.",
      link: {
        type: "doc",
        id: "business-text/index",
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
          items: [],
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
