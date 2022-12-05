import React from 'react';
import { FeatureItem } from '../types';

/**
 * Feature List
 */
export const FeatureList: FeatureItem[] = [
  {
    Svg: require("@site/static/img/features/feature-2.svg").default,
    description: (
      <>Specialize in developing plugins to use Grafana as a platform.</>
    ),
  },
  {
    Svg: require("@site/static/img/features/feature-1.svg").default,
    description: <>Trusted by the Community.</>,
  },
];
