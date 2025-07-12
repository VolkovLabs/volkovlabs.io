import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebar configuration for Docusaurus.
 * Defines the navigation structure for the 'plugins' documentation section.
 */
const sidebars: SidebarsConfig = {
  plugins: [
    // Business Suite section
    {
      type: "category",
      label: "Business Suite",
      collapsible: false, // Always expanded
      link: { type: "doc", id: "index" }, // Links to main Suite doc
      items: ["foundation/index", "security/index"],
    },

    // Business Calendar section
    {
      type: "category",
      label: "Business Calendar",
      description: "Display events and set time ranges", // Adjusted for conciseness
      collapsible: true,
      link: { type: "doc", id: "business-calendar/index" }, // Links to main Calendar doc
      items: [
        { type: "doc", id: "business-calendar/index", label: "Introduction" },
        "business-calendar/basic-config",
        {
          type: "category",
          label: "Configuration",
          link: { type: "doc", id: "business-calendar/sections" },
          items: [
            "business-calendar/main",
            "business-calendar/layout",
            "business-calendar/events",
            "business-calendar/annotations",
          ],
        },
        {
          type: "category",
          label: "Features",
          link: { type: "doc", id: "business-calendar/features" },
          items: [
            "business-calendar/internationalization",
            "business-calendar/dashboard-timezones",
            "business-calendar/color",
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          link: { type: "doc", id: "business-calendar/tutorials/index" },
          items: [], // Placeholder for future tutorials
        },
        "business-calendar/release",
      ],
    },

    // Business Charts section
    {
      type: "category",
      label: "Business Charts",
      description: "Powerful visualizations powered by Apache ECharts",
      collapsible: true,
      link: { type: "doc", id: "business-charts/index" },
      items: [
        { type: "doc", id: "business-charts/index", label: "Introduction" },
        {
          type: "category",
          label: "Charts Function",
          link: { type: "doc", id: "business-charts/options" },
          items: ["business-charts/code/panel"],
        },
        "business-charts/visualeditor",
        "business-charts/examples",
        {
          type: "category",
          label: "Features",
          link: { type: "doc", id: "business-charts/features" },
          items: [
            "business-charts/annotations",
            "business-charts/datasources",
            "business-charts/instance",
            "business-charts/events",
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
        },
        {
          type: "category",
          label: "Maps",
          link: { type: "doc", id: "business-charts/maps/index" },
          items: [
            "business-charts/maps/geojson",
            "business-charts/maps/baidu",
            "business-charts/maps/gaode",
            "business-charts/maps/google",
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          link: { type: "doc", id: "business-charts/tutorials/index" },
          items: [], // Placeholder for future tutorials
        },
        "business-charts/release",
      ],
    },

    // Business Forms section
    {
      type: "category",
      label: "Business Forms",
      description: "Insert, update, and configure application data",
      collapsible: true,
      link: { type: "doc", id: "business-forms/index" },
      items: [
        { type: "doc", id: "business-forms/index", label: "Introduction" },
        "business-forms/data-flow",
        {
          type: "category",
          label: "Form Elements",
          link: { type: "doc", id: "business-forms/form-elements" },
          items: [
            "business-forms/elements/button",
            "business-forms/elements/checkbox-list",
            "business-forms/elements/code-editor",
            "business-forms/elements/color-picker",
            "business-forms/elements/date",
            "business-forms/elements/date-time",
            "business-forms/elements/file",
            "business-forms/elements/link",
            "business-forms/elements/multi-select",
            "business-forms/elements/number-input",
            "business-forms/elements/number-slider",
            "business-forms/elements/password-input",
            "business-forms/elements/radio-group-boolean-options",
            "business-forms/elements/radio-group-custom-options",
            "business-forms/elements/read-only",
            "business-forms/elements/read-only-text-area",
            "business-forms/elements/string-input",
            "business-forms/elements/select-with-options",
            "business-forms/elements/text-area",
            "business-forms/elements/time",
          ],
        },
        "business-forms/architecture",
        {
          type: "category",
          label: "Custom Code",
          link: { type: "doc", id: "business-forms/code/index" },
          items: ["business-forms/code/panel"],
        },
        {
          type: "category",
          label: "Features",
          link: { type: "doc", id: "business-forms/features" },
          items: [
            "business-forms/control",
            "business-forms/request",
            "business-forms/dynamic",
            "business-forms/variables",
            "business-forms/load",
            "business-forms/confirm-window",
            "business-forms/expandable",
          ],
        },
        {
          type: "category",
          label: "Servers",
          link: { type: "doc", id: "business-forms/servers/index" },
          items: [
            "business-forms/servers/influx",
            "business-forms/servers/json",
            "business-forms/servers/mysql",
            "business-forms/servers/nodered",
            "business-forms/servers/postgresql",
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          link: { type: "doc", id: "business-forms/tutorials/index" },
          items: [], // Placeholder for future tutorials
        },
        "business-forms/release",
      ],
    },

    // Business Input section
    {
      type: "category",
      label: "Business Input",
      description: "Store and create your data",
      collapsible: true,
      link: { type: "doc", id: "business-input/index" },
      items: [
        { type: "doc", id: "business-input/index", label: "Introduction" },
        "business-input/provisioning",
        "business-input/variables",
        {
          type: "category",
          label: "Features",
          link: { type: "doc", id: "business-input/features" },
          items: ["business-input/code", "business-input/llm-app"],
        },
        {
          type: "category",
          label: "Panels",
          link: { type: "doc", id: "business-input/panels" },
          items: [
            "business-input/panels/business-charts",
            "business-input/panels/image",
            "business-input/panels/logs",
            "business-input/panels/graph",
            "business-input/panels/pie",
          ],
        },
        "business-input/release",
      ],
    },

    // Business Links section
    {
      type: "category",
      label: "Business Links",
      description:
        "Streamlines navigation with external links, dashboards, and dropdowns.",
      collapsible: true,
      link: { type: "doc", id: "business-links/index" },
      items: [
        { type: "doc", id: "business-links/index", label: "Introduction" },
        {
          type: "category",
          label: "Tutorials",
          link: { type: "doc", id: "business-links/tutorials/index" },
          items: [], // Placeholder for future tutorials
        },
        "business-links/release",
      ],
    },

    // Business Media section
    {
      type: "category",
      label: "Business Media",
      description: "Display Base64-encoded media files",
      collapsible: true,
      link: { type: "doc", id: "business-media/index" },
      items: [
        { type: "doc", id: "business-media/index", label: "Introduction" },
        "business-media/formats",
        "business-media/options",
        {
          type: "category",
          label: "Features",
          link: { type: "doc", id: "business-media/features" },
          items: ["business-media/datasources", "business-media/variables"],
        },
        {
          type: "category",
          label: "Tutorials",
          link: { type: "doc", id: "business-media/tutorials/index" },
          items: [], // Placeholder for future tutorials
        },
        "business-media/release",
      ],
    },

    // Business Table section
    {
      type: "category",
      label: "Business Table",
      description: "Simplify data visualization in table format",
      collapsible: true,
      link: { type: "doc", id: "business-table/index" },
      items: [
        { type: "doc", id: "business-table/index", label: "Introduction" },
        {
          type: "category",
          label: "Editable Data",
          link: { type: "doc", id: "business-table/editable" },
          items: [
            "business-table/layout",
            "business-table/add",
            "business-table/edit",
            "business-table/editor-types",
            "business-table/delete",
            "business-table/nested",
            "business-table/permission",
          ],
        },
        {
          type: "category",
          label: "Features",
          link: { type: "doc", id: "business-table/features/index" },
          items: [
            "business-table/features/download-button",
            "business-table/features/external-export",
            "business-table/features/infinity",
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          link: { type: "doc", id: "business-table/tutorials/index" },
          items: [], // Placeholder for future tutorials
        },
        "business-table/release",
      ],
    },

    // Business Text section
    {
      type: "category",
      label: "Business Text",
      description: "Dynamic, data-driven text",
      collapsible: true,
      link: { type: "doc", id: "business-text/index" },
      items: [
        { type: "doc", id: "business-text/index", label: "Introduction" },
        {
          type: "category",
          label: "JavaScript Code",
          link: { type: "doc", id: "business-text/code/index" },
          items: ["business-text/code/panel"],
        },
        {
          type: "category",
          label: "Rendering",
          link: { type: "doc", id: "business-text/content" },
          items: [
            "business-text/rendering-content",
            "business-text/recipes",
            "business-text/styles",
          ],
        },
        {
          type: "category",
          label: "Features",
          link: { type: "doc", id: "business-text/features" },
          items: [
            "business-text/helpers",
            "business-text/eventbus",
            "business-text/standard",
            "business-text/status",
            "business-text/variables",
            "business-text/wrap",
            "business-text/expandable",
          ],
        },
        {
          type: "category",
          label: "Use Cases",
          link: { type: "doc", id: "business-text/external/index" },
          items: [
            "business-text/external/bootstrap",
            "business-text/external/chart-js",
            "business-text/external/d3",
            "business-text/external/flowchart",
            "business-text/external/leaflet",
            "business-text/external/mapbox-gl",
            "business-text/external/mermaid",
            "business-text/external/plotly",
            "business-text/external/tailwind",
            "business-text/external/tensorflow",
            "business-text/external/youtube",
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          link: { type: "doc", id: "business-text/tutorials/index" },
          items: [], // Placeholder for future tutorials
        },
        "business-text/release",
      ],
    },

    // Business Variable section
    {
      type: "category",
      label: "Business Variable",
      description: "Update dashboard variables",
      collapsible: true,
      link: { type: "doc", id: "business-variable/index" },
      items: [
        { type: "doc", id: "business-variable/index", label: "Introduction" },
        {
          type: "category",
          label: "Data Flow",
          link: { type: "doc", id: "business-variable/data-flow" },
          items: [], // Placeholder for future items
        },
        {
          type: "category",
          label: "Display Mode",
          link: { type: "doc", id: "business-variable/layout" },
          items: [
            "business-variable/table",
            "business-variable/minimize",
            "business-variable/button",
            "business-variable/slider",
          ],
        },
        {
          type: "category",
          label: "Features",
          link: { type: "doc", id: "business-variable/features" },
          items: [
            "business-variable/sort",
            "business-variable/key",
            "business-variable/empty",
            "business-variable/persistent",
            "business-variable/redirect",
            "business-variable/input",
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          link: { type: "doc", id: "business-variable/tutorials/index" },
          items: [], // Placeholder for future tutorials
        },
        "business-variable/release",
      ],
    },

    // Retired section
    {
      type: "category",
      label: "Retired Plugins",
      description: "Retired plugins",
      collapsible: true,
      link: { type: "doc", id: "retired" },
      items: [
        // Business News section
        {
          type: "category",
          label: "Business News",
          description: "Visualize RSS and Atom feeds using Business Text",
          collapsible: true,
          link: { type: "doc", id: "business-news/index" },
          items: [
            { type: "doc", id: "business-news/index", label: "Introduction" },
            "business-news/text",
            "business-news/provisioning",
            "business-news/release",
          ],
        },

        // Business Satellite section
        {
          type: "category",
          label: "Business Satellite",
          description: "Connect to local and remote Grafana instances",
          collapsible: true,
          link: { type: "doc", id: "business-satellite/index" },
          items: [
            {
              type: "doc",
              id: "business-satellite/index",
              label: "Introduction",
            },
            "business-satellite/configuration",
            "business-satellite/provisioning",
            {
              type: "category",
              label: "Features",
              link: { type: "doc", id: "business-satellite/features" },
              items: ["business-satellite/annotations"],
            },
            "business-satellite/release",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
