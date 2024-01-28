import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebars
 */
const sidebars: SidebarsConfig = {
  big: [
    "index",
    {
      items: ["health-checks", "high-availability"],
      label: "Getting Started",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "getting-started",
      },
    },
    {
      items: [
        "big-alerting",
        "alerting-panel",
        "engine",
        "variables",
        "thresholds",
      ],
      label: "Alerting",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "alerting",
      },
    },
    {
      type: "link",
      href: "/big/api",
      label: "REST API",
    },
    {
      type: "link",
      href: "/blog/tags/business-intelligence",
      label: "Related Blog posts",
    },
    "release",
  ],
};

export default sidebars;
