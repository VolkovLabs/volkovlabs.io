import { Config } from "@docusaurus/types";
import { PLUGINS, PRESETS, THEME_CONFIG } from "./config";

/**
 * Docusaurus site configuration.
 * Defines core settings for the Volkov Labs documentation site.
 */
const config: Config = {
  // Base URL for the site
  baseUrl: "/", // Root path for all routes

  // Favicon for the site
  favicon: "img/favicon.ico",

  // Behavior when broken links are detected
  onBrokenLinks: "throw", // Fail build if links are broken
  onBrokenMarkdownLinks: "throw", // Fail build if Markdown links are broken

  // GitHub organization name
  organizationName: "VolkovLabs",

  // Plugins configuration (imported from ./config)
  plugins: PLUGINS,

  // Presets configuration (imported from ./config)
  presets: PRESETS,

  // GitHub project name
  projectName: "volkovlabs.io",

  // Site tagline
  tagline:
    "Revolutionize Your Business Insights with High-Performance, Scalable, and Alert-Driven Analytics!",

  // Theme configuration (imported from ./config)
  themeConfig: THEME_CONFIG,

  // Additional themes (none currently)
  themes: [],

  // Site title
  title: "Volkov Labs",

  // Ensure URLs end with a trailing slash
  trailingSlash: true,

  // Base URL for the deployed site
  url: "https://volkovlabs.io",
};

export default config;
