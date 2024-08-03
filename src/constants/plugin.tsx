import React from "react";
import { PluginItem } from "../types";

/**
 * Plugin List
 */
export const PluginList: PluginItem[] = [
  {
    title: "Business Calendar",
    name: "volkovlabs-calendar-panel",
    description: <>Display events and set time range.</>,
    href: "/plugins/volkovlabs-calendar-panel/",
  },
  {
    title: "Business Charts",
    name: "volkovlabs-echarts-panel",
    description: <>Powerful visualizations powered by Apache ECharts.</>,
    href: "/plugins/volkovlabs-echarts-panel/",
  },
  {
    title: "Business Forms",
    name: "volkovlabs-form-panel",
    description: (
      <>Insert, update application data, and modify configuration.</>
    ),
    href: "/plugins/volkovlabs-form-panel/",
  },
  {
    title: "Business Input",
    name: "volkovlabs-static-datasource",
    description: <>Store and create your data.</>,
    href: "/plugins/volkovlabs-static-datasource/",
  },
  {
    title: "Business Media",
    name: "volkovlabs-image-panel",
    description: <>Display Base64 encoded and URL media files.</>,
    href: "/plugins/volkovlabs-image-panel/",
  },
  {
    title: "Business News",
    name: "volkovlabs-rss-datasource",
    description: <>Visualize RSS/Atom feeds.</>,
    href: "/plugins/volkovlabs-rss-datasource/",
  },
  {
    title: "Business Satellite",
    name: "volkovlabs-grapi-datasource",
    description: <>Connect to Local and Remote Grafana instances.</>,
    href: "/plugins/volkovlabs-grapi-datasource/",
  },
  {
    title: "Business Table (coming soon)",
    name: "volkovlabs-table-panel",
    description: <>Summarize large amounts of data.</>,
  },
  {
    title: "Business Text",
    name: "volkovlabs-dynamictext-panel",
    description: <>Dynamic, data-driven text.</>,
    href: "/plugins/volkovlabs-dynamictext-panel/",
  },
  {
    title: "Business Variable",
    name: "volkovlabs-variable-panel",
    description: <>Update dashboard variables.</>,
    href: "/plugins/volkovlabs-variable-panel/",
  },
];
