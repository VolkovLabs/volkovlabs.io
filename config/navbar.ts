/**
 * Navigation Bar
 */
export const NAVBAR = {
  hideOnScroll: true,
  logo: {
    alt: "Volkov Labs",
    src: "img/suite.svg",
    srcDark: "img/suite.dark.svg",
  },
  items: [
    {
      to: "/plugins/",
      position: "left",
      label: "Business Suite for Grafana",
      "aria-label": "Plugins",
      items: [
        {
          label: "Business Calendar Panel",
          to: "/plugins/volkovlabs-calendar-panel/",
          className: "volkovlabs-link icon-plugins-calendar-link",
        },
        {
          label: "Business Charts Panel",
          to: "/plugins/volkovlabs-echarts-panel/",
          className: "volkovlabs-link icon-plugins-echarts-link",
        },
        {
          label: "Business Forms Panel",
          to: "/plugins/volkovlabs-form-panel/",
          className: "volkovlabs-link icon-plugins-form-link",
        },
        {
          label: "Business Input Data Source",
          to: "/plugins/volkovlabs-static-datasource/",
          className: "volkovlabs-link icon-plugins-static-link",
        },
        {
          label: "Business Media Panel",
          to: "/plugins/volkovlabs-image-panel/",
          className: "volkovlabs-link icon-plugins-base64-link",
        },
        {
          label: "Business News Data Source",
          to: "/plugins/volkovlabs-rss-datasource/",
          className: "volkovlabs-link icon-plugins-rss-link",
        },
        {
          label: "Business Satellite Data Source",
          to: "/plugins/volkovlabs-grapi-datasource/",
          className: "volkovlabs-link icon-plugins-grapi-link",
        },
        {
          label: "Business Text Panel",
          to: "/plugins/volkovlabs-dynamictext-panel/",
          className: "volkovlabs-link icon-plugins-dt-link",
        },
        {
          label: "Business Variable Panel",
          to: "/plugins/volkovlabs-variable-panel/",
          className: "volkovlabs-link icon-plugins-variable-link",
        },
      ],
    },
    {
      to: "/big/",
      position: "left",
      label: "Business Intelligence",
      "aria-label": "Business Intelligence",
      items: [
        {
          label: "Getting Started",
          to: "/big/getting-started",
          className: "volkovlabs-link icon-big-getting-started-link",
        },
        {
          label: "Alerting",
          to: "/big/alerting",
          className: "volkovlabs-link icon-big-alerting-link",
        },
        {
          label: "REST API",
          to: "/big/api",
          className: "volkovlabs-link icon-big-rest-api-link",
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
          className: "volkovlabs-link icon-grafana-link",
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
          label: "Environment Data Source",
          to: "/grafana/volkovlabs-env-datasource/",
          className: "volkovlabs-link icon-plugins-env-link",
        },
      ],
    },
    {
      to: "/blog/",
      position: "left",
      label: "Blog",
      "aria-label": "Blog",
      items: [
        {
          label: "Business Suite",
          to: "/blog/tags/business-suite",
        },
        {
          label: "Business Intelligence",
          to: "/blog/tags/business-intelligence",
        },
        {
          label: "Community",
          to: "/blog/tags/community",
        },
        {
          label: "Development",
          to: "/blog/tags/development",
        },
        {
          label: "Grafana Crash Course",
          to: "/blog/tags/grafana-crash-course",
        },
        {
          label: "Solutions",
          to: "/blog/tags/solution",
        },
        {
          label: "Volkov Labs",
          to: "/blog/tags/volkov-labs",
        },
      ],
    },
    {
      to: "/sponsor/",
      position: "left",
      label: "Volkov Labs",
      "aria-label": "Blog",
      items: [
        {
          label: "Team",
          to: "/sponsor",
          className: "volkovlabs-link icon-sponsor-link",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/volkovlabs",
          className: "volkovlabs-link icon-linkedin-link",
        },
        {
          label: "YouTube Community",
          href: "https://youtube.com/@volkovlabs/community",
          className: "volkovlabs-link icon-community-link",
        },
      ],
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
