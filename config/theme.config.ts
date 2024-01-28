import { themes } from "prism-react-renderer";
import { ALGOLIA } from "./algolia";
import { NAVBAR } from "./navbar";
import { FOOTER } from "./footer";
import type { ThemeConfig } from "@docusaurus/types";

/**
 * Theme Configuration
 */
export const THEME_CONFIG: ThemeConfig = {
  algolia: ALGOLIA,
  colorMode: {
    defaultMode: "light",
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  docs: {
    sidebar: {
      autoCollapseCategories: true,
    },
  },
  metadata: [
    {
      name: "keywords",
      content: "grafana,plugins,volkovlabs,visualization",
    },
  ],
  navbar: NAVBAR,
  footer: FOOTER,
  prism: {
    theme: themes.github,
    darkTheme: themes.dracula,
    additionalLanguages: ["docker", "nginx"],
  },
};
