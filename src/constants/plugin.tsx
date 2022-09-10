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
    badge:
      "https://img.shields.io/static/v1?label=grafana&message=marketplace&labelColor=ff5656&color=black&style=for-the-badge",
  },
  {
    title: "Data Manipulation Form Panel",
    Svg: require("@site/static/img/plugins/volkovlabs-form-panel.svg").default,
    description: (
      <>Insert, update application data, and modify configuration.</>
    ),
    href: "/plugins/volkovlabs-form-panel",
    badge:
      "https://img.shields.io/static/v1?label=grafana&message=marketplace&labelColor=ff5656&color=black&style=for-the-badge",
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
    badge:
      "https://img.shields.io/static/v1?label=grafana&message=marketplace&labelColor=ff5656&color=black&style=for-the-badge",
  },
  {
    title: "RSS/Atom Data Source",
    Svg: require("@site/static/img/plugins/volkovlabs-rss-datasource.svg")
      .default,
    description: (
      <>
        Retrieve RSS/Atom feeds and visualize them using Dynamic Text and other
        panels.
      </>
    ),
    href: "/plugins/volkovlabs-rss-datasource",
    badge:
      "https://img.shields.io/static/v1?label=grafana&message=marketplace&labelColor=ff5656&color=black&style=for-the-badge",
  },
  {
    title: "Environment Data Source",
    Svg: require("@site/static/img/plugins/volkovlabs-env-datasource.svg")
      .default,
    description: (
      <>
        Display Environment variables on your dashboard or use as variables to
        retrieve data.
      </>
    ),
    href: "/plugins/volkovlabs-env-datasource",
    badge:
      "https://img.shields.io/static/v1?label=private&message=repository&labelColor=9d70f9&color=black&style=for-the-badge",
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
    badge:
      "https://img.shields.io/static/v1?label=private&message=repository&labelColor=9d70f9&color=black&style=for-the-badge",
  },
];
