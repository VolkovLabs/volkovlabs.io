import React from 'react';
import { FeatureItem, PluginItem } from '../types';

/**
 * Project List
 */
export const ProjectList: PluginItem[] = [
  {
    title: "Demo Server",
    Svg: require("@site/static/img/plugins/demo.svg").default,
    description: <>All our Plugins in one place to expirience them.</>,
    href: "https://demo.volkovlabs.io",
  },
  {
    title: "Mesmerizing Flows NFT",
    Svg: require("@site/static/img/plugins/mesmerizing-flows.svg").default,
    description: (
      <>
        Every flow is unique and created using Volkov Labs plugins for Grafana.
      </>
    ),
    href: "/plugins/mesmerizing-flows",
    badge2: "https://img.shields.io/badge/Solana-NFT-black?style=for-the-badge",
  },
  {
    title: "Theiascope",
    Svg: require("@site/static/img/plugins/theiascope.svg").default,
    description: (
      <>
        Augment your scientific image analysis workflows with machine vision at
        the point-of-acquisition.
      </>
    ),
    href: "/plugins/theiascope",
    badge2: "https://img.shields.io/badge/commercial-black?style=for-the-badge",
  },
];
