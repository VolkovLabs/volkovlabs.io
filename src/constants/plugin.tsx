import React from 'react';
import { FeatureItem, PluginItem } from '../types';

/**
 * Plugin List
 */
export const PluginList: PluginItem[] = [
  {
    title: "Apache ECharts Panel",
    Svg: require("@site/static/img/plugins/volkovlabs-echarts-panel.svg")
      .default,
    description: (
      <>Powerful charting and visualization library Apache ECharts.</>
    ),
    href: "/plugins/volkovlabs-echarts-panel",
  },
  {
    title: "Balena Application",
    Svg: require("@site/static/img/plugins/volkovlabs-balena-app.svg").default,
    description: (
      <>
        Display device information and manage services using Balena Supervisor
        API.
      </>
    ),
    href: "/plugins/volkovlabs-balena-app",
    badge: "https://img.shields.io/badge/Private-black?style=for-the-badge",
  },
  {
    title: "Base64 Image/Video/Audio/PDF Panel",
    Svg: require("@site/static/img/plugins/volkovlabs-image-panel.svg").default,
    description: (
      <>
        Display Base64 encoded files in PNG, JPG, GIF, MP4, WEBM, MP3, OGG, PDF
        formats.
      </>
    ),
    href: "/plugins/volkovlabs-image-panel",
  },
  {
    title: "Calendar Panel",
    Svg: require("@site/static/img/plugins/volkovlabs-calendar-panel.svg")
      .default,
    description: <>Display calendar events and change time range.</>,
    href: "/plugins/volkovlabs-calendar-panel",
  },
  {
    title: "Dynamic Text Panel",
    Svg: require("@site/static/img/plugins/volkovlabs-dynamictext-panel.svg")
      .default,
    description: <>Dynamic, data-driven text.</>,
    href: "/plugins/volkovlabs-dynamictext-panel",
  },
  {
    title: "Data Manipulation Panel",
    Svg: require("@site/static/img/plugins/volkovlabs-form-panel.svg").default,
    description: (
      <>Insert, update application data, and modify configuration.</>
    ),
    href: "/plugins/volkovlabs-form-panel",
  },
  {
    title: "Environment Data Source",
    Svg: require("@site/static/img/plugins/volkovlabs-env-datasource.svg")
      .default,
    description: <>Environment variables on your dashboard.</>,
    href: "/plugins/volkovlabs-env-datasource",
    badge: "https://img.shields.io/badge/Private-black?style=for-the-badge",
  },
  {
    title: "RSS/Atom Data Source",
    Svg: require("@site/static/img/plugins/volkovlabs-rss-datasource.svg")
      .default,
    description: <>Visualize RSS/Atom feeds using Dynamic Text.</>,
    href: "/plugins/volkovlabs-rss-datasource",
  },
  {
    title: "Static Data Source",
    Svg: require("@site/static/img/plugins/volkovlabs-static-datasource.svg")
      .default,
    description: <>Emulate your data to test and develop panels.</>,
    href: "/plugins/volkovlabs-static-datasource",
  },
];
