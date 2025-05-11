import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebar configuration for Docusaurus.
 * Defines the navigation structure for the 'grafana' documentation section.
 */
const sidebars: SidebarsConfig = {
  grafana: [
    // Standalone root page
    "index",

    // Getting Started section
    {
      type: "category",
      label: "Getting Started",
      collapsible: false, // Always expanded
      link: { type: "doc", id: "started" }, // Links to main Getting Started doc
      items: [
        "installation",
        "business",
        "transformations",
        "variables",
        "timeseries",
        "annotations",
      ],
    },

    // Advanced section
    {
      type: "category",
      label: "Advanced",
      collapsible: false, // Always expanded
      link: { type: "doc", id: "advanced/index" }, // Links to main Advanced doc
      items: [
        "customize",
        "datasources/json",
        "storage",
        "provisioning",
        "advanced/high-availability",
        "allow-unsigned",
        "advanced/canvas",
        "advanced/analytics",
      ],
    },

    // Developer section
    {
      type: "category",
      label: "Developer",
      collapsible: false, // Always expanded
      link: { type: "doc", id: "developer/index" }, // Links to main Developer doc
      items: [
        "developer/overview",
        "developer/thinkbig",
        "developer/panel",
        "developer/eventbus",
      ],
    },
  ],
};

export default sidebars;
