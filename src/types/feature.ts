/**
 * Feature Item
 */
export interface FeatureItem {
  /**
   * Description
   */
  description: JSX.Element;

  /**
   * SVG
   */
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
}
