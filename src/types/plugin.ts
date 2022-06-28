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
   * SVG
   */
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;

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
