import React from 'react';
import { PluginItem } from '../types';

/**
 * Project List
 */
export const ProjectList: PluginItem[] = [
  {
    title: "Balena NFS",
    Svg: require("@site/static/img/balena/balena-nfs.svg").default,
    description: <>Deploy NFS Server and Client in balenaCloud.</>,
    href: "/plugins/balena-nfs",
    badge:
      "https://img.shields.io/static/v1?label=balena&message=Hub&labelColor=gray&color=black&style=for-the-badge",
  },
  {
    title: "ECharts Examples",
    Svg: require("@site/static/img/plugins/echarts.svg").default,
    description: <>100+ visualizations in Grafana.</>,
    href: "https://echarts.volkovlabs.io",
    target: "_blank",
    badge:
      "https://img.shields.io/static/v1?label=Apache&message=ECharts&labelColor=ff5656&color=black&style=for-the-badge",
  },
  {
    title: "Live Server",
    Svg: require("@site/static/img/plugins/live.svg").default,
    description: <>Everything we have done as directed graph.</>,
    href: "https://live.volkovlabs.io",
    target: "_blank",
    badge:
      "https://img.shields.io/static/v1?label=Apache&message=ECharts&labelColor=ff5656&color=black&style=for-the-badge",
  },
  {
    title: "Theiascope",
    Svg: require("@site/static/img/plugins/theiascope.svg").default,
    description: <>Augment your scientific image analysis workflows.</>,
    href: "https://theiascientific.com/",
    target: "_blank",
    badge:
      "https://img.shields.io/badge/Collaboration-black?style=for-the-badge",
  },
  {
    title: "Volkov Labs Application",
    Svg: require("@site/static/img/plugins/volkovlabs-app.svg").default,
    description: <>Custom build Docker image with Grafana.</>,
    href: "/plugins/volkovlabs-app",
    badge:
      "https://img.shields.io/static/v1?label=Docker&message=Image&labelColor=gray&color=black&style=for-the-badge",
  },
];
