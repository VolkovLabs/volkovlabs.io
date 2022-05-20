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
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'plugins'
        },
        blog: false,
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
      colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
      metadata: [{name: 'keywords', content: 'grafana, plugins'}],
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Volkov Labs',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: '#What',
            position: 'right',
            label: 'What we are doing'
          },
          {
            href: '#Why',
            position: 'right',
            label: 'Why work with us'
          },
          {
            href: '#Portfolio',
            position: 'right',
            label: 'Portfolio'
          },
          {
            href: '#Team',
            position: 'right',
            label: 'Team'
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Volkov Labs',
          src: 'img/logo.svg',
        },
        style: 'light',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'Private Repository',
                href: '/plugins',
              },
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
                href: '/plugins/mesmerizing-flows',
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
                label: 'Data Manipulation Form Panel',
                to: '/plugins/volkovlabs-form-panel',
              },
              {
                label: 'Environment Data Source',
                to: '/plugins/volkovlabs-env-datasource',
              },
              {
                label: 'RSS Data Source',
                to: '/plugins/volkovlabs-rss-datasource',
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
