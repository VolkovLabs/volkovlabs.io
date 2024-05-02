import { Config } from "@docusaurus/types";
import { PLUGINS, PRESETS, THEME_CONFIG } from "./config";

/**
 * Config
 */
const config: Config = {
  baseUrl: "/",
  customFields: {
    updated: "",
  },
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  organizationName: "VolkovLabs",
  plugins: PLUGINS,
  presets: PRESETS,
  projectName: "volkovlabs.io",
  tagline: "Business solutions for Grafana",
  themeConfig: THEME_CONFIG,
  themes: [],
  title: "Volkov Labs",
  trailingSlash: true,
  url: "https://volkovlabs.io",
};

export default config;
