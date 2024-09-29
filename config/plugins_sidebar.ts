import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebars
 */
const sidebars: SidebarsConfig = {
  plugins: [
    {
      items: ["foundation/index", "security/index"],
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
            "business-calendar/main",
            "business-calendar/layout",
            "business-calendar/events",
            "business-calendar/annotations",
          ],
          label: "Configuration",
          type: "category",
          link: {
            type: "doc",
            id: "business-calendar/sections",
          },
        },
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
          items: [],
          label: "Tutorials",
          type: "category",
          link: {
            type: "doc",
            id: "business-calendar/tutorials/index",
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
        "business-charts/visualeditor",
        "business-charts/examples",
        {
          items: [
            "business-charts/annotations",
            "business-charts/datasources",
            "business-charts/events",
            "business-charts/instance",
            "business-charts/imports",
            "business-charts/images",
            "business-charts/extended",
            "business-charts/eventbus",
            "business-charts/streaming",
            "business-charts/theme",
            "business-charts/transformations",
            "business-charts/variables",
            "business-charts/wordcloud",
            "business-charts/expandable",
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
          items: [],
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
          id: "business-forms/index",
          label: "Introduction",
        },
        "business-forms/data-flow",
        "business-forms/form-elements",
        "business-forms/architecture",
        "business-forms/code",
        {
          items: [
            "business-forms/control",
            "business-forms/request",
            "business-forms/dynamic",
            "business-forms/variables",
            "business-forms/load",
            "business-forms/confirm-window",
            "business-forms/expandable",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "business-forms/features",
          },
        },
        {
          items: [
            "business-forms/servers/influx",
            "business-forms/servers/json",
            "business-forms/servers/mysql",
            "business-forms/servers/nodered",
            "business-forms/servers/postgresql",
          ],
          label: "Servers",
          type: "category",
          link: {
            type: "doc",
            id: "business-forms/servers/index",
          },
        },
        {
          items: [],
          label: "Tutorials",
          type: "category",
          link: {
            type: "doc",
            id: "business-forms/tutorials/index",
          },
        },
        "business-forms/release",
      ],
      label: "Business Forms",
      type: "category",
      description: "Insert, update application data, and modify configuration.",
      link: {
        type: "doc",
        id: "business-forms/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "business-input/index",
          label: "Introduction",
        },
        "business-input/provisioning",
        "business-input/variables",
        {
          items: ["business-input/code", "business-input/llm-app"],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "business-input/features",
          },
        },
        {
          items: [
            "business-input/panels/business-charts",
            "business-input/panels/image",
            "business-input/panels/logs",
            "business-input/panels/graph",
            "business-input/panels/pie",
          ],
          label: "Panels",
          type: "category",
          link: {
            type: "doc",
            id: "business-input/panels",
          },
        },
        "business-input/release",
      ],
      label: "Business Input",
      type: "category",
      description: "Store and create your data.",
      link: {
        type: "doc",
        id: "business-input/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "business-media/index",
          label: "Introduction",
        },
        "business-media/formats",
        "business-media/options",
        {
          items: ["business-media/datasources", "business-media/variables"],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "business-media/features",
          },
        },
        {
          items: [],
          label: "Tutorials",
          type: "category",
          link: {
            type: "doc",
            id: "business-media/tutorials/index",
          },
        },
        "business-media/release",
      ],
      label: "Business Media",
      type: "category",
      description: "Display Base64 encoded media files.",
      link: {
        type: "doc",
        id: "business-media/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "business-news/index",
          label: "Introduction",
        },
        "business-news/text",
        "business-news/provisioning",
        "business-news/release",
      ],
      label: "Business News",
      type: "category",
      description: "Visualize RSS and Atom feeds using Business Text.",
      link: {
        type: "doc",
        id: "business-news/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "business-satellite/index",
          label: "Introduction",
        },
        "business-satellite/configuration",
        "business-satellite/provisioning",
        {
          items: ["business-satellite/annotations"],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "business-satellite/features",
          },
        },
        "business-satellite/release",
      ],
      label: "Business Satellite",
      type: "category",
      description: "Connect to Local and Remote Grafana instances.",
      link: {
        type: "doc",
        id: "business-satellite/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "business-table/index",
          label: "Introduction",
        },
        "business-table/features",
        "business-table/release",
      ],
      label: "Business Table",
      type: "category",
      description: "Summarize large amounts of data.",
      link: {
        type: "doc",
        id: "business-table/index",
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
            "business-text/rendering-content",
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
            "business-text/expandable",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "business-text/features",
          },
        },
        {
          items: [],
          label: "Tutorials",
          type: "category",
          link: {
            type: "doc",
            id: "business-text/tutorials/index",
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
          id: "business-variable/index",
          label: "Introduction",
        },
        {
          items: [],
          label: "Data Flow",
          type: "category",
          link: {
            type: "doc",
            id: "business-variable/data-flow",
          },
        },
        {
          items: [
            "business-variable/table",
            "business-variable/minimize",
            "business-variable/button",
            "business-variable/slider",
          ],
          label: "Display Mode",
          type: "category",
          link: {
            type: "doc",
            id: "business-variable/layout",
          },
        },
        {
          items: [
            "business-variable/sort",
            "business-variable/key",
            "business-variable/empty",
            "business-variable/persistent",
            "business-variable/redirect",
            "business-variable/input",
          ],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "business-variable/features",
          },
        },
        {
          items: [],
          label: "Tutorials",
          type: "category",
          link: {
            type: "doc",
            id: "business-variable/tutorials/index",
          },
        },
        "business-variable/release",
      ],
      label: "Business Variable",
      type: "category",
      description: "Update dashboard variables.",
      link: {
        type: "doc",
        id: "business-variable/index",
      },
    },
  ],
};

export default sidebars;
