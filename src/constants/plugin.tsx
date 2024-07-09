import React from "react";
import { PluginItem } from "../types";

/**
 * Plugin List
 */
export const PluginList: PluginItem[] = [
  {
    title: "Business Calendar Panel",
    name: "volkovlabs-calendar-panel",
    description: <>Display events and change time range.</>,
    href: "/plugins/volkovlabs-calendar-panel/",
  },
  {
    title: "Business Charts Panel",
    name: "volkovlabs-echarts-panel",
    description: <>Powerful visualizations powered by Apache ECharts.</>,
    href: "/plugins/volkovlabs-echarts-panel/",
  },
  {
    title: "Business Forms Panel",
    name: "volkovlabs-form-panel",
    description: (
      <>Insert, update application data, and modify configuration.</>
    ),
    href: "/plugins/volkovlabs-form-panel/",
  },
  {
    title: "Business Input Data Source",
    name: "volkovlabs-static-datasource",
    description: <>Store and create your data.</>,
    href: "/plugins/volkovlabs-static-datasource/",
  },
  {
    title: "Business Media Panel",
    name: "volkovlabs-image-panel",
    description: <>Display Base64 encoded media files.</>,
    href: "/plugins/volkovlabs-image-panel/",
  },
  {
    title: "Business News Data Source",
    name: "volkovlabs-rss-datasource",
    description: <>Visualize RSS/Atom feeds.</>,
    href: "/plugins/volkovlabs-rss-datasource/",
  },
  {
    title: "Business Satellite Data Source",
    name: "volkovlabs-grapi-datasource",
    description: <>Connect to Local and Remote Grafana instances.</>,
    href: "/plugins/volkovlabs-grapi-datasource/",
  },
  {
    title: "Business Text Panel",
    name: "volkovlabs-dynamictext-panel",
    description: <>Dynamic, data-driven text.</>,
    href: "/plugins/volkovlabs-dynamictext-panel/",
  },
  {
    title: "Business Variable Panel",
    name: "volkovlabs-variable-panel",
    description: <>Update dashboard variables.</>,
    href: "/plugins/volkovlabs-variable-panel/",
  },
];
