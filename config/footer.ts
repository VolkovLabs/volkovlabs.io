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
      title: "Open-Source Plugins",
      items: [
        {
          label: "Base64 Image/PDF Panel",
          to: "/plugins/volkovlabs-image-panel/",
          className: "volkovlabs-footer-link icon-plugins-base64-link",
        },
        {
          label: "Business Charts Panel",
          to: "/plugins/volkovlabs-echarts-panel/",
          className: "volkovlabs-footer-link icon-plugins-echarts-link",
        },
        {
          label: "Business Calendar Panel",
          to: "/plugins/volkovlabs-calendar-panel/",
          className: "volkovlabs-footer-link icon-plugins-calendar-link",
        },
        {
          label: "Dynamic Text Panel",
          to: "/plugins/volkovlabs-dynamictext-panel/",
          className: "volkovlabs-footer-link icon-plugins-dt-link",
        },
        {
          label: "Data Manipulation Panel",
          to: "/plugins/volkovlabs-form-panel/",
          className: "volkovlabs-footer-link icon-plugins-form-link",
        },
        {
          label: "Environment Data Source",
          to: "/plugins/volkovlabs-env-datasource/",
          className: "volkovlabs-footer-link icon-plugins-env-link",
        },
        {
          label: "Grafana API Data Source",
          to: "/plugins/volkovlabs-grapi-datasource/",
          className: "volkovlabs-footer-link icon-plugins-grapi-link",
        },
        {
          label: "RSS/Atom Data Source",
          to: "/plugins/volkovlabs-rss-datasource/",
          className: "volkovlabs-footer-link icon-plugins-rss-link",
        },
        {
          label: "Static Data Source",
          to: "/plugins/volkovlabs-static-datasource/",
          className: "volkovlabs-footer-link icon-plugins-static-link",
        },
        {
          label: "Variable Panel",
          to: "/plugins/volkovlabs-variable-panel/",
          className: "volkovlabs-footer-link icon-plugins-variable-link",
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
          label: "Release Dashboard",
          href: "https://release.volkovlabs.io",
        },
        {
          label: "GitHub",
          href: "https://github.com/VolkovLabs",
          className: "volkovlabs-footer-link icon-github-link",
        },
        {
          label: "YouTube Channel",
          href: "https://youtube.com/@volkovlabs",
          className: "volkovlabs-footer-link icon-youtube-link",
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
