/**
 * PluginItem
 * Represents a plugin or feature item for display in Volkov Labs’ ecosystem.
 */
export interface PluginItem {
  /**
   * The primary title of the plugin or feature.
   */
  title: string;

  /**
   * A unique identifier or slug for the plugin (e.g., "business-engine").
   */
  name: string;

  /**
   * A React element describing the plugin’s purpose or features.
   */
  description: React.ReactNode;

  /**
   * The link target attribute (e.g., "_blank" for new tab).
   * @default undefined (opens in same tab)
   */
  target?: "_self" | "_blank" | "_parent" | "_top";

  /**
   * The URL or path to the plugin’s page or resource.
   */
  href: string;

  /**
   * An optional primary badge (e.g., "New", "Beta") for visual emphasis.
   */
  badge?: string;

  /**
   * An optional secondary badge (e.g., "Enterprise", "Free") for additional labeling.
   */
  badge2?: string;

  /**
   * Indicates if the plugin is actively available or in development.
   * @default true
   */
  isActive?: boolean;
}
