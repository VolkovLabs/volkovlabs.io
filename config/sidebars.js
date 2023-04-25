const grafana = require(require.resolve("./sidebar/grafana.js"));
const commmunity = require(require.resolve("./sidebar/community.js"));
const development = require(require.resolve("./sidebar/development.js"));

/**
 * Sidebar
 */
const mySidebar = [
  {
    id: "index",
    label: "What's new",
    type: "doc",
  },
  commmunity,
  grafana,
  development,
];

/**
 * Sidebars
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mySidebar,
};

module.exports = sidebars;
