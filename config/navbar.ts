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
          label: "Business Table",
          to: "/plugins/business-table/",
          className: "volkovlabs-link icon-plugins-table-link",
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
          className: "volkovlabs-link icon-big-link",
        },
        {
          label: "Business Studio",
          to: "/big/studio/",
          className: "volkovlabs-link icon-big-studio-link",
        },
        {
          label: "Business Engine",
          to: "/big/engine/",
          className: "volkovlabs-link icon-big-engine-link",
        },
        {
          label: "Business Alerting",
          to: "/big/alerting/",
          className: "volkovlabs-link icon-big-alerting-link",
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
          label: "All",
          to: "/blog/",
          className: "volkovlabs-link icon-blog-link",
        },
        {
          label: "Business Suite",
          to: "/blog/tags/business-suite",
          className: "volkovlabs-link icon-suite-link",
        },
        {
          label: "Business Intelligence",
          to: "/blog/tags/business-intelligence",
          className: "volkovlabs-link icon-big-link",
        },
        {
          label: "Business Gazette",
          to: "/blog/tags/business-gazette",
          className: "volkovlabs-link icon-gazette-link",
        },
        {
          label: "Grafana Crash Course",
          to: "/blog/tags/grafana-crash-course",
          className: "volkovlabs-link icon-grafana-link",
        },
        {
          label: "Solutions",
          to: "/blog/tags/solution",
          className: "volkovlabs-link icon-solutions-link",
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
      to: "/pricing/",
      position: "right",
      label: "Enterprise plan",
      "aria-label": "Enterprise plan",
    },
  ],
};
