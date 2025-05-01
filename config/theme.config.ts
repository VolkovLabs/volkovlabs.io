import { ALGOLIA } from "./algolia";
import { ANNOUNCEMENT_BAR } from "./announcement";
import { FOOTER } from "./footer";
import { NAVBAR } from "./navbar";
import { PRISM } from "./prism";
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
  prism: PRISM,

  // Announcement banner
  announcementBar: ANNOUNCEMENT_BAR,
};
