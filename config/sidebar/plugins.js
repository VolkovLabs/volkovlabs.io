const commmunity = require(require.resolve("./community.js"));
const development = require(require.resolve("./development.js"));

/**
 * Sidebar
 */
const mySidebar = ["index", "releases", commmunity, development];

/**
 * Sidebars
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mySidebar,
};

module.exports = sidebars;
