import React from 'react';
import { FeatureItem, PluginItem } from '../types';

/**
 * Plugin List
 */
export const PluginList: PluginItem[] = [
  {
    title: "Apache ECharts Panel",
    name: "volkovlabs-echarts-panel",
    description: (
      <>Powerful charting and visualization library Apache ECharts.</>
    ),
    href: "/plugins/volkovlabs-echarts-panel/",
  },
  {
    title: "Balena Application",
    name: "volkovlabs-balena-app",
    description: (
      <>
        Display device information and manage services using Balena Supervisor
        API.
      </>
    ),
    href: "/plugins/volkovlabs-balena-app/",
    badge: "https://img.shields.io/badge/Private-black?style=for-the-badge",
  },
  {
    title: "Base64 Image/Video/Audio/PDF Panel",
    name: "volkovlabs-image-panel",
    description: (
      <>
        Display Base64 encoded files in PNG, JPG, GIF, MP4, WEBM, MP3, OGG, PDF
        formats.
      </>
    ),
    href: "/plugins/volkovlabs-image-panel/",
  },
  {
    title: "Calendar Panel",
    name: "volkovlabs-calendar-panel",
    description: <>Display calendar events and change time range.</>,
    href: "/plugins/volkovlabs-calendar-panel/",
  },
  {
    title: "Dynamic Text Panel",
    name: "volkovlabs-dynamictext-panel",
    description: <>Dynamic, data-driven text.</>,
    href: "/plugins/volkovlabs-dynamictext-panel/",
  },
  {
    title: "Data Manipulation Panel",
    name: "volkovlabs-form-panel",
    description: (
      <>Insert, update application data, and modify configuration.</>
    ),
    href: "/plugins/volkovlabs-form-panel/",
  },
  {
    title: "Environment Data Source",
    name: "volkovlabs-env-datasource",
    description: <>Environment variables on your dashboard.</>,
    href: "/plugins/volkovlabs-env-datasource",
    badge: "https://img.shields.io/badge/Private-black?style=for-the-badge",
  },
  {
    title: "RSS/Atom Data Source",
    name: "volkovlabs-rss-datasource",
    description: <>Visualize RSS/Atom feeds using Dynamic Text.</>,
    href: "/plugins/volkovlabs-rss-datasource/",
  },
  {
    title: "Static Data Source",
    name: "volkovlabs-static-datasource",
    description: <>Store and emulate your data.</>,
    href: "/plugins/volkovlabs-static-datasource/",
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
