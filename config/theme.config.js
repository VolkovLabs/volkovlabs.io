const navbar = require(require.resolve("./navbar.js"));
const footer = require(require.resolve("./footer.js"));

/**
 * Themes
 */
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/**
 * Theme Configuration
 *
 * @type {import('@docusaurus/preset-classic').ThemeConfig}
 */
const themeConfig = {
  colorMode: {
    defaultMode: "light",
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  metadata: [
    {
      name: "keywords",
      content: "grafana, plugins, volkovlabs, visualization",
    },
  ],
  navbar,
  footer,
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
    additionalLanguages: ["docker", "nginx"],
  },
};

module.exports = themeConfig;
