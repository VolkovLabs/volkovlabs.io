/**
 * Plugins
 */
export const PLUGINS = [
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "grafana",
      path: "grafana",
      routeBasePath: "grafana",
      sidebarPath: require.resolve("./grafana_sidebar.js"),
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "big",
      path: "big",
      routeBasePath: "big",
      sidebarPath: require.resolve("./big_sidebar.ts"),
    },
  ],
];
