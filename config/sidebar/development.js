/**
 * Development
 */
const development = {
  items: [
    "development/index",
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-echarts-lite/index",
          label: "Introduction",
        },
        "volkovlabs-echarts-lite/release",
      ],
      label: "Apache ECharts Lite Panel",
      type: "category",
      description: "Apache ECharts Core functionality, no extras.",
      link: {
        type: "doc",
        id: "volkovlabs-echarts-lite/index",
      },
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-balena-app/index",
          label: "Introduction",
        },
        "volkovlabs-balena-app/balenaCloud",
        "volkovlabs-balena-app/provisioning",
        "volkovlabs-balena-app/release",
      ],
      label: "Balena Application",
      type: "category",
      description:
        "Display device information and manage services using Balena Supervisor API.",
      link: {
        type: "doc",
        id: "volkovlabs-balena-app/index",
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
      link: {
        type: "doc",
        id: "templates/index",
      },
      items: [
        {
          type: "doc",
          id: "templates/index",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "volkovlabs-abc-app/index",
          label: "Application",
        },
        {
          type: "doc",
          id: "volkovlabs-abc-datasource/index",
          label: "Data Source",
        },
        {
          type: "doc",
          id: "volkovlabs-abc-panel/index",
          label: "Panel",
        },
        "templates/release",
      ],
      label: "Plugin Templates",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-app/index",
          label: "Introduction",
        },
        "volkovlabs-app/release",
      ],
      label: "Volkov Labs Application",
      type: "category",
      description: "Docker image with customized Grafana.",
      link: {
        type: "doc",
        id: "volkovlabs-app/index",
      },
    },
  ],
  label: "Development",
  type: "category",
  link: {
    type: "doc",
    id: "development/index",
  },
  collapsible: false,
};

module.exports = development;
