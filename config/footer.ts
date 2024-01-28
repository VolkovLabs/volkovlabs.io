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
      title: "Plugins",
      items: [
        {
          label: "Apache ECharts Panel",
          to: "/plugins/volkovlabs-echarts-panel/",
        },
        {
          label: "Base64 Image/PDF Panel",
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
      title: "Discover",
      items: [
        {
          label: "Blog",
          href: "/blog/",
        },
        {
          label: "Business Intelligence",
          href: "/big/",
        },
        {
          label: "Grafana Crash Course",
          href: "/grafana/",
        },
        {
          label: "YouTube Channel",
          href: "https://youtube.com/@volkovlabs",
        },
      ],
    },
    {
      title: "Dashboards",
      items: [
        {
          label: "Releases",
          href: "https://release.volkovlabs.io",
        },
        {
          label: "ECharts Examples",
          href: "https://echarts.volkovlabs.io",
        },
        {
          label: "Live Updates",
          href: "https://live.volkovlabs.io",
        },
      ],
    },
    {
      title: "Get in touch",
      items: [
        {
          label: "Sponsor",
          href: "/sponsor/",
        },
        {
          label: "GitHub",
          href: "https://github.com/VolkovLabs",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/volkovlabs",
        },
        {
          label: "YouTube Community",
          href: "https://youtube.com/@volkovlabs/community",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Volkov Labs. All rights reserved.`,
};
