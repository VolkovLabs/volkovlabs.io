const grafana = require(require.resolve("./sidebar/grafana.js"));
const plugins = require(require.resolve("./sidebar/plugins.js"));
const projects = require(require.resolve("./sidebar/projects.js"));

/**
 * Sidebar
 */
const mySidebar = [
  {
    id: "index",
    label: "What's new",
    type: "doc",
  },
  grafana,
  plugins,
  projects,
  {
    type: "link",
    label: "Release Dashboard",
    href: "https://release.volkovlabs.io",
  },
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
