/**
 * Presets
 */
const presets = [
  [
    "@docusaurus/preset-classic",
    {
      docs: {
        sidebarPath: require.resolve("./sidebars.js"),
        routeBasePath: "plugins",
      },
      blog: {
        postsPerPage: "ALL",
        blogSidebarCount: 0,
      },
      gtag: {
        trackingID: process.env.GTAG ?? "G-",
        anonymizeIP: true,
      },
      theme: {
        customCss: require.resolve("../src/css/custom.css"),
      },
    },
  ],
];

module.exports = presets;
