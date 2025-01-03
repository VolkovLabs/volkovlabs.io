import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebars
 */
const sidebars: SidebarsConfig = {
  big: [
    {
      items: ["getting-started", "high-availability"],
      label: "Business Intelligence",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "index",
      },
    },
    {
      items: ["studio/support"],
      label: "Business Studio",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "studio/index",
      },
    },
    {
      items: [
        "engine/configuration",
        "engine/prometheus",
        {
          type: "link",
          href: "/big/api",
          label: "Engine API",
        },
      ],
      label: "Business Engine",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "engine/index",
      },
    },
    {
      //      items: ["alerting/panel", "alerting/variables", "alerting/thresholds"],
      items: [],
      label: "Business Alerting",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "alerting/index",
      },
    },
    "release",
  ],
};

export default sidebars;
