/**
 * Navigation Bar
 */
const navbar = {
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
          label: "Related Blog posts",
          to: "/blog/tags/business-intelligence",
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
        },
        {
          label: "Base64 Panel",
          to: "/plugins/volkovlabs-image-panel/",
        },
        {
          label: "Calendar Panel",
          to: "/plugins/volkovlabs-calendar-panel/",
        },
        {
          label: "Dynamic Text Panel",
          to: "/plugins/volkovlabs-dynamictext-panel/",
        },
        {
          label: "Data Manipulation Panel",
          to: "/plugins/volkovlabs-form-panel/",
        },
        {
          label: "Environment Data Source",
          to: "/plugins/volkovlabs-env-datasource/",
        },
        {
          label: "Grafana API Data Source",
          to: "/plugins/volkovlabs-grapi-datasource/",
        },
        {
          label: "RSS/Atom Data Source",
          to: "/plugins/volkovlabs-rss-datasource/",
        },
        {
          label: "Static Data Source",
          to: "/plugins/volkovlabs-static-datasource/",
        },
        {
          label: "Variable Panel",
          to: "/plugins/volkovlabs-variable-panel/",
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

module.exports = navbar;
