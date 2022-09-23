import React from 'react';
import { PluginItem } from '../types';

/**
 * Project List
 */
export const ProjectList: PluginItem[] = [
  {
    title: "Live Server",
    Svg: require("@site/static/img/plugins/live.svg").default,
    description: <>Everything we have done as directed graph.</>,
    href: "https://live.volkovlabs.io",
  },
  {
    title: "Private Repository",
    Svg: require("@site/static/img/repository.svg").default,
    description: <>Download our plugins to test the latest features.</>,
    href: "/plugins",
  },
  {
    title: "Volkov Labs Application",
    Svg: require("@site/static/img/plugins/volkovlabs-app.svg").default,
    description: <>Custom build Docker image with Grafana.</>,
    href: "/plugins/volkovlabs-app",
  },
  {
    title: "Grafana Plugins Weekly",
    Svg: require("@site/static/img/weekly.svg").default,
    description: <>Review of the most popular and updated plugins.</>,
    href: "https://volkovlabs.com/grafana-plugins-weekly/home",
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
    title: "Theiascope",
    Svg: require("@site/static/img/plugins/theiascope.svg").default,
    description: (
      <>
        Augment your scientific image analysis workflows with machine vision at
        the point-of-acquisition.
      </>
    ),
    href: "/plugins/theiascope",
    badge:
      "https://img.shields.io/badge/Collaboration-black?style=for-the-badge",
  },
];
