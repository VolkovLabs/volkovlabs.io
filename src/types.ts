/**
 * Feature Item
 */
export interface FeatureItem {
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
   * PNG
   */
  Png?: string;

  /**
   * Description
   */
  description: JSX.Element;

  /**
   * Link
   */
  href: string;
}
