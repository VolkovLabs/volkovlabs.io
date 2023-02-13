const presets = require(require.resolve("./config/presets.js"));
const themeConfig = require(require.resolve("./config/theme.config.js"));

/**
 * Config
 *
 * @type {import('@docusaurus/types').Config}
 */
const config = {
  baseUrl: "/",
  customFields: {
    updated: "",
  },
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  organizationName: "VolkovLabs",
  plugins: [],
  presets,
  projectName: "volkovlabs.io",
  tagline: "Plugin development for Grafana",
  themeConfig,
  themes: [],
  title: "Volkov Labs",
  trailingSlash: true,
  url: "https://volkovlabs.io",
};

module.exports = config;
