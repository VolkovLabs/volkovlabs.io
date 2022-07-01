import React from 'react';
import { FeatureItem, PluginItem } from '../types';

/**
 * Project List
 */
export const ProjectList: PluginItem[] = [
  {
    title: "Demo Server",
    Svg: require("@site/static/img/plugins/demo.svg").default,
    description: <>Experience our Plugins in one place.</>,
    href: "https://demo.volkovlabs.io",
  },
  {
    title: "Private Repository",
    Svg: require("@site/static/img/repository.svg").default,
    description: <>Download our plugins to test the latest features.</>,
    href: "/plugins",
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
    badge: "https://img.shields.io/badge/Solana-NFT-black?style=for-the-badge",
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
    badge: "https://img.shields.io/badge/Commercial-black?style=for-the-badge",
  },
];
