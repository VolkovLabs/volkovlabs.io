import React from 'react';
import { FeatureItem } from './types';

/**
 * Plugin List
 */
export const PluginList: FeatureItem[] = [
  {
    title: "Base64 Image/PDF Panel",
    Svg: require("@site/static/img/plugins/volkovlabs-image-panel.svg").default,
    description: (
      <>
        Allows displaying raw and Base64 encoded files in PNG, JPG, GIF, and PDF
        formats.
      </>
    ),
    href: "/plugins/volkovlabs-image-panel",
    badge: "https://img.shields.io/badge/open-source-blue?style=for-the-badge",
    badge2: "https://img.shields.io/badge/community-green?style=for-the-badge",
  },
  {
    title: "RSS/Atom Data Source",
    Svg: require("@site/static/img/plugins/volkovlabs-rss-datasource.svg")
      .default,
    description: (
      <>
        Retrieves RSS/Atom feeds and allows to visualize them using Dynamic Text
        and other panels.
      </>
    ),
    href: "/plugins/volkovlabs-rss-datasource",
    badge: "https://img.shields.io/badge/open-source-blue?style=for-the-badge",
    badge2: "https://img.shields.io/badge/community-green?style=for-the-badge",
  },
  {
    title: "Environment Data Source",
    Svg: require("@site/static/img/plugins/volkovlabs-env-datasource.svg")
      .default,
    description: (
      <>
        Returns environment variables to display on your dashboard or use as
        Variables to retrieve data.
      </>
    ),
    href: "/plugins/volkovlabs-env-datasource",
    badge: "https://img.shields.io/badge/open-source-blue?style=for-the-badge",
    badge2: "https://img.shields.io/badge/private-red?style=for-the-badge",
  },
  {
    title: "Mesmerizing Flows NFT",
    png: "/img/plugins/mesmerizing-flows-nft.png",
    description: (
      <>
        Every flow is unique and created using Volkov Labs plugins for Grafana.
      </>
    ),
    target: "_blank",
    href: "https://solsea.io/collection/61ce604b558d7a2f0b8ecacc",
    badge2: "https://img.shields.io/badge/private-red?style=for-the-badge",
  },
  {
    title: "Redis Data Source and Application",
    png: "/img/plugins/redisgrafana.png",
    description: (
      <>
        The Redis plugins for Grafana let you connect Grafana to Redis to
        visualize more types of data in more ways than otherwise would be
        possible.
      </>
    ),
    target: "_blank",
    href: "https://redisgrafana.github.io",
    badge: "https://img.shields.io/badge/open-source-blue?style=for-the-badge",
    badge2: "https://img.shields.io/badge/community-green?style=for-the-badge",
  },
  {
    title: "Molycop",
    png: "/img/plugins/molycop.png",
    description: (
      <>The Mill Charge Motion Widget to display sensor information.</>
    ),
    target: "_blank",
    href: "https://molycop.com/",
    badge2: "https://img.shields.io/badge/private-red?style=for-the-badge",
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
    target: "_blank",
    href: "https://www.theiascope.io/",
    badge2: "https://img.shields.io/badge/private-red?style=for-the-badge",
  },
];
