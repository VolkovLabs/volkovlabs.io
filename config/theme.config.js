const algolia = require(require.resolve("./algolia.js"));
const footer = require(require.resolve("./footer.js"));
const navbar = require(require.resolve("./navbar.js"));

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
  algolia,
  colorMode: {
    defaultMode: "light",
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  docs: {
    sidebar: {
      autoCollapseCategories: true,
      hideable: true,
    },
  },
  metadata: [
    {
      name: "keywords",
      content: "grafana,plugins,volkovlabs,visualization",
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
