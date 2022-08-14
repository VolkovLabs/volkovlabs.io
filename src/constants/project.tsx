import React from 'react';
import { FeatureItem, PluginItem } from '../types';

/**
 * Project List
 */
export const ProjectList: PluginItem[] = [
  {
    title: "Live Server",
    Svg: require("@site/static/img/plugins/live.svg").default,
    description: <>Everything we have done as directed graph.</>,
    href: "https://live.volkovlabs.io",
    badge:
      "https://img.shields.io/static/v1?label=Apache&message=ECharts&labelColor=gray&color=black&style=for-the-badge",
  },
  {
    title: "Private Repository",
    Svg: require("@site/static/img/repository.svg").default,
    description: <>Download our plugins to test the latest features.</>,
    href: "/plugins",
    badge:
      "https://img.shields.io/static/v1?label=private&message=repository&labelColor=9d70f9&color=black&style=for-the-badge",
  },
  {
    title: "Grafana Plugins Weekly",
    Svg: require("@site/static/img/weekly.svg").default,
    description: <>Review of the most popular and updated plugins.</>,
    href: "https://volkovlabs.com/grafana-plugins-weekly/home",
    badge:
      "https://img.shields.io/static/v1?label=Medium&message=Articles&labelColor=gray&color=black&style=for-the-badge",
  },
  {
    title: "Balena NFS",
    Svg: require("@site/static/img/balena/balena-nfs.svg").default,
    description: (
      <>Demonstrate how to deploy NFS Server and Client in balenaCloud.</>
    ),
    href: "/plugins/balena-nfs",
    badge:
      "https://img.shields.io/static/v1?label=balenaHub&message=project&labelColor=gray&color=black&style=for-the-badge",
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
