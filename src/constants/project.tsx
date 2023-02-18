import React from "react";
import { PluginItem } from "../types";

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
    title: "Grafana Development Templates",
    name: "template",
    description: <>Start from well-constructed template.</>,
    href: "/blog/development-templates-2.2.0-20230216/",
  },
  {
    title: "Volkov Labs Application",
    name: "volkovlabs-app",
    description: <>Custom Docker image with Grafana.</>,
    href: "/plugins/volkovlabs-app/",
    badge:
      "https://img.shields.io/static/v1?label=Docker&message=Image&labelColor=gray&color=black&style=for-the-badge",
  },
];
