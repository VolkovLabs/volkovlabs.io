// @ts-check
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
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [{ name: "keywords", content: "grafana, plugins, volkovlabs" }],
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "Volkov Labs",
          src: "img/logo.svg",
          srcDark: "img/logo.dark.svg",
        },
        items: [
          {
            label: "Company",
            position: "right",
            items: [
              {
                href: "/#Plugins",
                label: "Grafana Plugins",
              },
              {
                href: "/#Projects",
                label: "Projects",
              },
              {
                href: "/#Team",
                label: "Team",
              },
            ],
          },
          {
            href: "/plugins",
            position: "right",
            label: "Documentation",
          },
          {
            href: "https://www.youtube.com/@volkovlabs/community",
            position: "right",
            label: "YouTube Community",
          },
        ],
      },
      footer: {
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
                label: "Calendar Panel",
                to: "/plugins/volkovlabs-calendar-panel",
              },
              {
                label: "Dynamic Text Panel",
                to: "/plugins/volkovlabs-dynamictext-panel",
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
              {
                label: "Static Data Source",
                to: "/plugins/volkovlabs-static-datasource",
              },
              {
                label: "Volkov Labs Application",
                href: "plugins/volkovlabs-app",
              },
            ],
          },
          {
            title: "Projects",
            items: [
              {
                label: "Balena NFS",
                href: "/plugins/balena-nfs",
              },
              {
                label: "Demo Server",
                href: "https://demo.volkovlabs.io",
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
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
