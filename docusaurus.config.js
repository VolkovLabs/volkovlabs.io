// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Volkov Labs",
  tagline: "Plugin development for Grafana",
  url: "https://volkovlabs.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "VolkovLabs",
  projectName: "",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "plugins",
        },
        blog: false,
        gtag: {
          trackingID: "G-D3HVJTTCBD",
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      metadata: [{ name: "keywords", content: "grafana, plugins, volkovlabs" }],
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "Volkov Labs",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "/#What",
            position: "right",
            label: "What we are doing",
          },
          {
            href: "/#Portfolio",
            position: "right",
            label: "Portfolio",
          },
          {
            href: "/#Projects",
            position: "right",
            label: "Projects",
          },
          {
            href: "/#Team",
            position: "right",
            label: "Team",
          },
        ],
      },
      footer: {
        logo: {
          alt: "Volkov Labs",
          src: "img/logo.svg",
        },
        style: "light",
        links: [
          {
            title: "Projects",
            items: [
              {
                label: "Live Server",
                href: "https://live.volkovlabs.io",
              },
              {
                label: "Private Repository",
                href: "/plugins",
              },
              {
                label: "Grafana Plugins Weekly",
                href: "https://volkovlabs.com/grafana-plugins-weekly/home",
              },
              {
                label: "Balena NFS",
                href: "/plugins/balena-nfs",
              },
              {
                label: "Theiascope™",
                href: "/plugins/theiascope",
              },
            ],
          },
          {
            title: "Portfolio",
            items: [
              {
                label: "Apache ECharts Panel",
                to: "/plugins/volkovlabs-echarts-panel",
              },
              {
                label: "Balena Application",
                to: "/plugins/volkovlabs-balena-app",
              },
              {
                label: "Base64 Image/PDF Panel",
                to: "/plugins/volkovlabs-image-panel",
              },
              {
                label: "Data Manipulation Panel",
                to: "/plugins/volkovlabs-form-panel",
              },
              {
                label: "Environment Data Source",
                to: "/plugins/volkovlabs-env-datasource",
              },
              {
                label: "RSS/Atom Data Source",
                to: "/plugins/volkovlabs-rss-datasource",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Blog",
                href: "https://volkovlabs.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/VolkovLabs",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/volkovlabs",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCQadniwbukI6ZmTN2oTTb-g",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: "info@volkovlabs.io",
                href: "mailto:info@volkovlabs.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Volkov Labs. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
