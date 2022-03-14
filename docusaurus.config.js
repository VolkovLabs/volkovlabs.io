// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Volkov Labs',
  tagline: 'Custom plugin development for Grafana',
  url: 'https://volkovlabs.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'VolkovLabs',
  projectName: '',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'plugins'
        },
        gtag: {
          trackingID: 'G-D3HVJTTCBD',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'grafana, plugins'}],
      navbar: {
        title: 'Volkov Labs',
        hideOnScroll: true,
        logo: {
          alt: 'Volkov Labs',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'portfolio',
            position: 'right',
            label: 'Portfolio',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'Grafana Plugins Weekly',
                href: 'https://volkovlabs.com/grafana-plugins-weekly/home',
              },
              {
                label: 'Demo Server',
                href: 'https://demo.volkovlabs.io',
              },
              {
                label: 'Mesmerizing Flows NFT',
                href: 'https://solsea.io/collection/61ce604b558d7a2f0b8ecacc',
              },
            ],
          },
          {
            title: 'Plugins',
            items: [
              {
                label: 'Base64 Image/PDF Panel',
                to: '/plugins/volkovlabs-image-panel',
              },
              {
                label: 'RSS Data Source',
                to: '/plugins/volkovlabs-rss-datasource',
              },
              {
                label: 'Environment Data Source',
                to: '/plugins/volkovlabs-env-datasource',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Blog',
                href: 'https://volkovlabs.com',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCQadniwbukI6ZmTN2oTTb-g',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/volkovlabs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/VolkovLabs',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'info@volkovlabs.io',
                href: 'mailto:info@volkovlabs.io',
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
