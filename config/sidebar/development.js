/**
 * Development
 */
const development = {
  items: [
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
      description: "Custom Docker image with Grafana.",
      link: {
        type: "doc",
        id: "volkovlabs-app/index",
      },
    },
  ],
  label: "Development",
  type: "category",
};

module.exports = development;
