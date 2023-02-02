const presets = require(require.resolve("./config/presets.js"));
const themeConfig = require(require.resolve("./config/theme.config.js"));

/**
 * Config
 *
 * @type {import('@docusaurus/types').Config}
 */
const config = {
  title: "Volkov Labs",
  tagline: "Plugin development for Grafana",
  url: "https://volkovlabs.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  trailingSlash: true,
  organizationName: "VolkovLabs",
  projectName: "volkovlabs.io",
  themes: ["@saucelabs/theme-github-codeblock"],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  presets,
  themeConfig,
};

module.exports = config;
