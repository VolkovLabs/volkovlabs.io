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
      items: [
        "studio/manage-business-engines",
        {
          items: [
            "studio/actions/logs",
            "studio/actions/json",
            "studio/actions/node-red",
          ],
          label: "Actions",
          type: "category",
          link: {
            type: "doc",
            id: "studio/actions/index",
          },
        },

        "studio/support",
      ],
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
          items: [
            {
              type: "link",
              href: "/big/api",
              label: "OpenAPI Specification",
            },
          ],
          label: "Business Engine API",
          type: "category",
          link: {
            type: "doc",
            id: "engine/api",
          },
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
      items: [
        "alerting/manage-alert-rules",
        //        "alerting/variables",
        //        "alerting/thresholds",
        {
          items: [
            "alerting/datasources/postgresql",
            "alerting/datasources/prometheus",
            "alerting/datasources/loki",
          ],
          label: "Data Sources",
          type: "category",
          link: {
            type: "doc",
            id: "alerting/datasources/index",
          },
        },
      ],
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
