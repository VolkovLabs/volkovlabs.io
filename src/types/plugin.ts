/**
 * Plugin Item
 */
export interface PluginItem {
  /**
   * Title
   */
  title: string;

  /**
   * Sub-Title
   */
  subTitle?: string;

  /**
   * Name
   */
  name: string;

  /**
   * Description
   */
  description: JSX.Element;

  /**
   * Target
   */
  target?: string;

  /**
   * Link
   */
  href: string;

  /**
   * Badge
   */
  badge?: string;

  /**
   * Badge2
   */
  badge2?: string;
}
