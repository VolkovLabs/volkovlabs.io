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
          label: "Business Calendar",
          to: "/plugins/business-calendar/",
          className: "volkovlabs-link icon-plugins-calendar-link",
        },
        {
          label: "Business Charts",
          to: "/plugins/business-charts/",
          className: "volkovlabs-link icon-plugins-echarts-link",
        },
        {
          label: "Business Forms",
          to: "/plugins/business-forms/",
          className: "volkovlabs-link icon-plugins-form-link",
        },
        {
          label: "Business Input",
          to: "/plugins/business-input/",
          className: "volkovlabs-link icon-plugins-static-link",
        },
        {
          label: "Business Media",
          to: "/plugins/business-media/",
          className: "volkovlabs-link icon-plugins-base64-link",
        },
        {
          label: "Business News",
          to: "/plugins/business-news/",
          className: "volkovlabs-link icon-plugins-rss-link",
        },
        {
          label: "Business Satellite",
          to: "/plugins/business-satellite/",
          className: "volkovlabs-link icon-plugins-grapi-link",
        },
        {
          label: "Business Text",
          to: "/plugins/business-text/",
          className: "volkovlabs-link icon-plugins-dt-link",
        },
        {
          label: "Business Variable",
          to: "/plugins/business-variable/",
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
          className: "volkovlabs-link icon-grafana-started-link",
        },
        {
          label: "Advanced",
          to: "/grafana/advanced",
          className: "volkovlabs-link icon-grafana-advanced-link",
        },
        {
          label: "Developer",
          to: "/grafana/developer",
          className: "volkovlabs-link icon-grafana-developer-link",
        },
        {
          label: "Environment data source",
          to: "/grafana/environment/",
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
          label: "Grafana Crash Course",
          to: "/blog/tags/grafana-crash-course",
        },
        {
          label: "Highlights",
          to: "/blog/tags/highlights",
        },
        {
          label: "Solutions",
          to: "/blog/tags/solution",
        },
      ],
    },
    {
      to: "/team/",
      position: "left",
      label: "Company",
      "aria-label": "Company",
    },
    {
      href: "https://youtube.com/@volkovlabs",
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
