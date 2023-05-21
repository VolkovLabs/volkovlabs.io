/**
 * Plugins
 */
const plugins = [
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "grafana",
      path: "grafana",
      routeBasePath: "grafana",
      sidebarPath: require.resolve("./sidebar/grafana.js"),
    },
  ],
];

module.exports = plugins;
