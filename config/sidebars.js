const dashboards = require(require.resolve("./sidebar/dashboards"));
const grafana = require(require.resolve("./sidebar/grafana.js"));
const plugins = require(require.resolve("./sidebar/plugins.js"));
const development = require(require.resolve("./sidebar/development.js"));

/**
 * Sidebar
 */
const mySidebar = [plugins, grafana, dashboards, development];

/**
 * Sidebars
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mySidebar,
};

module.exports = sidebars;
