import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebars
 */
const sidebars: SidebarsConfig = {
  grafana: [
    "index",
    {
      items: [
        "installation",
        "business",
        "transformations",
        "variables",
        "timeseries",
        "annotations",
      ],
      label: "Getting Started",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "started",
      },
    },
    {
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
      label: "Advanced",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "advanced/index",
      },
    },
    {
      items: [
        "developer/overview",
        "developer/thinkbig",
        "developer/panel",
        "developer/eventbus",
      ],
      label: "Developer",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "developer/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "environment/index",
          label: "Introduction",
        },
        "environment/deployment",
        "environment/provisioning",
        {
          items: ["environment/variables"],
          label: "Features",
          type: "category",
          link: {
            type: "doc",
            id: "environment/features",
          },
        },
        "environment/release",
      ],
      label: "Environment data source",
      type: "category",
      description: "Environment variables on your dashboard.",
      link: {
        type: "doc",
        id: "environment/index",
      },
    },
  ],
};

export default sidebars;
