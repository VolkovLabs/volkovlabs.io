import React from 'react';
import { FeatureItem } from '../types';

/**
 * Feature List
 */
export const FeatureList: FeatureItem[] = [
  {
    Svg: require("@site/static/img/features/feature-1.svg").default,
    description: <>Build software for your unique needs.</>,
  },
  {
    Svg: require("@site/static/img/features/feature-2.svg").default,
    description: (
      <>
        Specialize in developing custom plugins to visualize your data using
        Grafana as a platform.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/features/feature-3.svg").default,
    description: (
      <>Our solutions are cost-effective, creative, and delivered on time.</>
    ),
  },
];
