import React from 'react';
import { PluginItem } from '../types';

/**
 * Project List
 */
export const ProjectList: PluginItem[] = [
  {
    title: "Balena NFS",
    name: "balena-nfs",
    description: <>Deploy NFS Server and Client in balenaCloud.</>,
    href: "/plugins/balena-nfs/",
    badge:
      "https://img.shields.io/static/v1?label=balena&message=Hub&labelColor=gray&color=black&style=for-the-badge",
  },
  {
    title: "ECharts Examples",
    name: "echarts",
    description: <>100+ visualizations in Grafana.</>,
    href: "https://echarts.volkovlabs.io",
    target: "_blank",
    badge:
      "https://img.shields.io/static/v1?label=Apache&message=ECharts&labelColor=ff5656&color=black&style=for-the-badge",
  },
  {
    title: "Live Updates",
    name: "live",
    description: <>Everything we have done as directed graph.</>,
    href: "https://live.volkovlabs.io",
    target: "_blank",
    badge:
      "https://img.shields.io/static/v1?label=Apache&message=ECharts&labelColor=ff5656&color=black&style=for-the-badge",
  },
  {
    title: "Theiascope",
    name: "theiascope",
    description: <>Augment your scientific image analysis workflows.</>,
    href: "https://theiascientific.com/",
    target: "_blank",
    badge:
      "https://img.shields.io/badge/Collaboration-black?style=for-the-badge",
  },
];
