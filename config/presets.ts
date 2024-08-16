import { PresetConfig } from "@docusaurus/types";

/**
 * Presets
 */
export const PRESETS: PresetConfig[] = [
  [
    "classic",
    {
      docs: {
        routeBasePath: "plugins",
        sidebarPath: require.resolve("./plugins_sidebar.js"),
      },
      blog: {
        postsPerPage: "ALL",
        blogSidebarCount: 0,
        showReadingTime: false,
        onUntruncatedBlogPosts: "ignore",
        onInlineAuthors: "ignore",
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
