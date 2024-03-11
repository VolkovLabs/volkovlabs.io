/**
 * Navigation Bar
 */
export const NAVBAR = {
  hideOnScroll: true,
  logo: {
    alt: "Volkov Labs",
    src: "img/logo.svg",
    srcDark: "img/logo.dark.svg",
  },
  items: [
    {
      to: "/blog/",
      position: "left",
      label: "Blog",
      "aria-label": "Blog",
    },
    {
      to: "/big/",
      position: "left",
      label: "Business Intelligence",
      "aria-label": "Business Intelligence",
      items: [
        {
          label: "Introduction",
          to: "/big/",
        },
        {
          label: "Getting Started",
          to: "/big/getting-started",
        },
        {
          label: "Alerting",
          to: "/big/alerting",
        },
        {
          label: "REST API",
          to: "/big/api",
        },
        {
          label: "Related Blog posts",
          to: "/blog/tags/business-intelligence",
        },
        {
          label: "Release Notes",
          to: "/big/release",
        },
      ],
    },
    {
      to: "/grafana/",
      position: "left",
      label: "Grafana Crash Course",
      "aria-label": "Grafana",
      items: [
        {
          label: "Introduction",
          to: "/grafana/",
        },
        {
          label: "Getting Started",
          to: "/grafana/started",
        },
        {
          label: "Advanced",
          to: "/grafana/advanced",
        },
        {
          label: "Developer",
          to: "/grafana/developer",
        },
        {
          label: "Related Blog posts",
          to: "/blog/tags/grafana-crash-course",
        },
      ],
    },
    {
      to: "/plugins/",
      position: "left",
      label: "Plugins",
      "aria-label": "Plugins",
      items: [
        {
          label: "Apache ECharts Panel",
          to: "/plugins/volkovlabs-echarts-panel/",
          className: "volkovlabs-link icon-plugins-echarts-link",
        },
        {
          label: "Base64 Panel",
          to: "/plugins/volkovlabs-image-panel/",
          className: "volkovlabs-link icon-plugins-base64-link",
        },
        {
          label: "Calendar Panel",
          to: "/plugins/volkovlabs-calendar-panel/",
          className: "volkovlabs-link icon-plugins-calendar-link",
        },
        {
          label: "Dynamic Text Panel",
          to: "/plugins/volkovlabs-dynamictext-panel/",
          className: "volkovlabs-link icon-plugins-dt-link",
        },
        {
          label: "Data Manipulation Panel",
          to: "/plugins/volkovlabs-form-panel/",
          className: "volkovlabs-link icon-plugins-form-link",
        },
        {
          label: "Environment Data Source",
          to: "/plugins/volkovlabs-env-datasource/",
          className: "volkovlabs-link icon-plugins-env-link",
        },
        {
          label: "Grafana API Data Source",
          to: "/plugins/volkovlabs-grapi-datasource/",
          className: "volkovlabs-link icon-plugins-grapi-link",
        },
        {
          label: "RSS/Atom Data Source",
          to: "/plugins/volkovlabs-rss-datasource/",
          className: "volkovlabs-link icon-plugins-rss-link",
        },
        {
          label: "Static Data Source",
          to: "/plugins/volkovlabs-static-datasource/",
          className: "volkovlabs-link icon-plugins-static-link",
        },
        {
          label: "Variable Panel",
          to: "/plugins/volkovlabs-variable-panel/",
          className: "volkovlabs-link icon-plugins-variable-link",
        },
      ],
    },
    {
      to: "/sponsor/",
      position: "left",
      label: "Sponsor",
      "aria-label": "Sponsor",
    },
    {
      href: "https://www.youtube.com/@volkovlabs",
      position: "right",
      className: "header-youtube-link",
      "aria-label": "YouTube Channel",
    },
    {
      href: "https://github.com/VolkovLabs",
      position: "right",
      className: "header-github-link",
      "aria-label": "GitHub Organization",
    },
  ],
};
