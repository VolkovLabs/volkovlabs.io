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
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "big",
      path: "big",
      routeBasePath: "big",
      sidebarPath: require.resolve("./sidebar/big.js"),
    },
  ],
];

module.exports = plugins;
