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
  png?: string;

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
