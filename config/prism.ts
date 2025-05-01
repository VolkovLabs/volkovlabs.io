import { themes } from "prism-react-renderer";

/**
 * Prism code highlighting configuration.
 */
export const PRISM = {
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
};
