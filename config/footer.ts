/**
 * Footer
 */
export const FOOTER = {
  logo: {
    alt: "Volkov Labs",
    src: "img/logo.svg",
    srcDark: "img/logo.dark.svg",
  },
  style: "light",
  links: [
    {
      title: "Business Suite for Grafana",
      items: [
        {
          label: "Business Calendar",
          to: "/plugins/business-calendar/",
          className: "volkovlabs-footer-link icon-plugins-calendar-link",
        },
        {
          label: "Business Charts",
          to: "/plugins/business-charts/",
          className: "volkovlabs-footer-link icon-plugins-echarts-link",
        },
        {
          label: "Business Forms",
          to: "/plugins/business-forms/",
          className: "volkovlabs-footer-link icon-plugins-form-link",
        },
        {
          label: "Business Input",
          to: "/plugins/business-input/",
          className: "volkovlabs-footer-link icon-plugins-static-link",
        },
        {
          label: "Business Media",
          to: "/plugins/business-media/",
          className: "volkovlabs-footer-link icon-plugins-base64-link",
        },
        {
          label: "Business News",
          to: "/plugins/business-news/",
          className: "volkovlabs-footer-link icon-plugins-rss-link",
        },
        {
          label: "Business Satellite",
          to: "/plugins/business-satellite/",
          className: "volkovlabs-footer-link icon-plugins-grapi-link",
        },
        {
          label: "Business Table",
          to: "/plugins/business-table/",
          className: "volkovlabs-footer-link icon-plugins-table-link",
        },
        {
          label: "Business Text",
          to: "/plugins/business-text/",
          className: "volkovlabs-footer-link icon-plugins-dt-link",
        },
        {
          label: "Business Variable",
          to: "/plugins/business-variable/",
          className: "volkovlabs-footer-link icon-plugins-variable-link",
        },
      ],
    },
    {
      title: "Business Intelligence",
      items: [
        {
          label: "Getting started",
          href: "/big/getting-started/",
          className: "volkovlabs-footer-link icon-big-getting-started-link",
        },
        {
          label: "Alerting",
          href: "/big/alerting/",
          className: "volkovlabs-footer-link icon-big-alerting-link",
        },
        {
          label: "REST API",
          href: "/big/api/",
          className: "volkovlabs-footer-link icon-big-rest-api-link",
        },
      ],
    },
    {
      title: "Discover",
      items: [
        {
          label: "Blog",
          href: "/blog/",
          className: "volkovlabs-footer-link icon-blog-link",
        },
        {
          label: "Grafana Crash Course",
          href: "/grafana/",
          className: "volkovlabs-footer-link icon-grafana-link",
        },
        {
          label: "Environment data source",
          to: "/grafana/environment/",
          className: "volkovlabs-footer-link icon-plugins-env-link",
        },
        {
          label: "Release Dashboard",
          href: "https://release.volkovlabs.io",
          className: "volkovlabs-footer-link icon-release-link",
        },
        {
          label: "YouTube Channel",
          href: "https://youtube.com/@volkovlabs",
          className: "volkovlabs-footer-link icon-youtube-link",
        },
      ],
    },
    {
      title: "Company",
      items: [
        {
          label: "About us",
          href: "/team/",
          className: "volkovlabs-footer-link icon-team-link",
        },
        {
          label: "GitHub",
          href: "https://github.com/VolkovLabs",
          className: "volkovlabs-footer-link icon-github-link",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/volkovlabs",
          className: "volkovlabs-footer-link icon-linkedin-link",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Volkov Labs, USA. All rights reserved.`,
};
