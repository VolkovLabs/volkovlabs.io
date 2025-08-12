/**
 * Docusaurus plugin configurations for documentation content.
 * Defines multiple documentation instances with custom paths and sidebars.
 */
export const PLUGINS = [
  // Grafana documentation plugin
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "grafana",
      path: "grafana",
      routeBasePath: "grafana",
      sidebarPath: require.resolve("./grafana_sidebar.ts"),
    },
  ],
];
