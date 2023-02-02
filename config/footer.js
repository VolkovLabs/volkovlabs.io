/**
 * Footer
 */
const footer = {
  logo: {
    alt: "Volkov Labs",
    src: "img/logo.svg",
    srcDark: "img/logo.dark.svg",
  },
  style: "light",
  links: [
    {
      title: "Grafana Plugins",
      items: [
        {
          label: "Apache ECharts Panel",
          to: "/plugins/volkovlabs-echarts-panel/",
        },
        {
          label: "Balena Application",
          to: "/plugins/volkovlabs-balena-app/",
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
          label: "RSS/Atom Data Source",
          to: "/plugins/volkovlabs-rss-datasource/",
        },
        {
          label: "Static Data Source",
          to: "/plugins/volkovlabs-static-datasource/",
        },
        {
          label: "Volkov Labs Application",
          href: "/plugins/volkovlabs-app/",
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          label: "Balena NFS",
          href: "/plugins/balena-nfs/",
        },
        {
          label: "ECharts Examples",
          href: "https://echarts.volkovlabs.io",
        },
        {
          label: "Live Updates",
          href: "https://live.volkovlabs.io",
        },
        {
          label: "Theiascope™",
          href: "https://theiascientific.com/",
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
          label: "GitHub",
          href: "https://github.com/VolkovLabs",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/volkovlabs",
        },
        {
          label: "YouTube Channel",
          href: "https://youtube.com/@volkovlabs",
        },
      ],
    },
    {
      title: "Get in touch",
      items: [
        {
          label: "Contact",
          href: "mailto:info@volkovlabs.io",
        },
        {
          label: "Sponsor",
          href: "https://github.com/sponsors/VolkovLabs",
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

module.exports = footer;
