/**
 * Presets
 */
const presets = [
  [
    "@docusaurus/preset-classic",
    {
      docs: {
        routeBasePath: "plugins",
        sidebarPath: require.resolve("./sidebar/plugins.js"),
      },
      blog: {
        postsPerPage: "ALL",
        blogSidebarCount: 0,
        showReadingTime: false,
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
  [
    "redocusaurus",
    {
      specs: [
        {
          spec: "big/big-spec.json",
          route: "big/api/",
        },
      ],
    },
  ],
];

module.exports = presets;
