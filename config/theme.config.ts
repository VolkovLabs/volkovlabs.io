import { themes } from "prism-react-renderer";
import { ALGOLIA } from "./algolia";
import { NAVBAR } from "./navbar";
import { FOOTER } from "./footer";
import type { ThemeConfig } from "@docusaurus/types";

/**
 * Docusaurus theme configuration.
 * Customizes appearance, syntax highlighting, navigation, and search functionality.
 */
export const THEME_CONFIG: ThemeConfig = {
  // Algolia search configuration
  algolia: ALGOLIA,

  // Color mode settings
  colorMode: {
    defaultMode: "light", // Default to light mode
    disableSwitch: false, // Enable theme toggle switch
    respectPrefersColorScheme: true, // Respect user's system color preference
  },

  // Documentation sidebar settings
  docs: {
    sidebar: {
      autoCollapseCategories: true, // Automatically collapse inactive categories
    },
  },

  // Metadata for SEO and discoverability
  metadata: [
    {
      name: "keywords",
      content: "grafana, plugins, volkovlabs, visualization", // Keywords for search engines
    },
  ],

  // Navigation bar configuration
  navbar: NAVBAR,

  // Footer configuration
  footer: FOOTER,

  // Prism code highlighting configuration
  prism: {
    theme: themes.github, // Light theme for code blocks
    darkTheme: themes.dracula, // Dark theme for code blocks
    additionalLanguages: [
      "docker", // Dockerfiles
      "nginx", // NGINX configs
      "bash", // Shell scripts
      "json", // JSON data
      "yaml", // YAML configs
      "java", // Java code
      "scala", // Scala code
      "handlebars", // Handlebars templates
      "markup-templating", // Markup templating (e.g., HTML)
    ],
  },

  // Announcement banner
  announcementBar: {
    id: "business_intelligence_3_0",
    content:
      '<a href="/blog/business-intelligence-3.0.0">Business Intelligence 3.0.0</a> is out 🚀',
  },
};
