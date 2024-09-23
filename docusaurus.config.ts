import { Config } from "@docusaurus/types";
import { PLUGINS, PRESETS, THEME_CONFIG } from "./config";

/**
 * Config
 */
const config: Config = {
  baseUrl: "/",
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  organizationName: "VolkovLabs",
  plugins: PLUGINS,
  presets: PRESETS,
  projectName: "volkovlabs.io",
  tagline: "Business Suite for Grafana",
  themeConfig: THEME_CONFIG,
  themes: [],
  title: "Volkov Labs",
  trailingSlash: true,
  scripts: [
    "https://static.zdassets.com/ekr/snippet.js?key=3103acc1-cdc9-4af8-a87c-b9a5c1eaa54d",
  ],
  url: "https://volkovlabs.io",
};

export default config;
