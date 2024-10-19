import React from "react";
import { PluginItem } from "../types";

/**
 * Plugin List
 */
export const PluginList: PluginItem[] = [
  {
    title: "Business Calendar",
    name: "business-calendar",
    description: (
      <>
        Displays events in a stylish calendar format. The data can come from
        various data sources.
      </>
    ),
    href: "/plugins/business-calendar/",
  },
  {
    title: "Business Charts",
    name: "business-charts",
    description: (
      <>
        Integrates charts and graphs created by the Apache ECharts library into
        your Grafana dashboard.
      </>
    ),
    href: "/plugins/business-charts/",
  },
  {
    title: "Business Forms",
    name: "business-forms",
    description: (
      <>
        Allows inserting and updating application data, as well as modifying
        configuration directly from your Grafana dashboard.
      </>
    ),
    href: "/plugins/business-forms/",
  },
  {
    title: "Business Input",
    name: "business-input",
    description: (
      <>Allows storing and emulating your data using JavaScript and LLM.</>
    ),
    href: "/plugins/business-input/",
  },
  {
    title: "Business Media",
    name: "business-media",
    description: (
      <>
        Allows to create the desired visual experience by mixing and matching
        any supported formats for multimedia file visualizations.
      </>
    ),
    href: "/plugins/business-media/",
  },
  {
    title: "Business News",
    name: "business-news",
    description: (
      <>
        Retrieves RSS and Atom feeds and allows visualizing them using Business
        Text and other panels.
      </>
    ),
    href: "/plugins/business-news/",
  },
  {
    title: "Business Satellite",
    name: "business-satellite",
    description: (
      <>
        Allows to retrieve data from local and remote Grafana instances via HTTP
        API.
      </>
    ),
    href: "/plugins/business-satellite/",
  },
  {
    title: "Business Table",
    name: "business-table",
    description: <>Allows to simplify data visualization in table format.</>,
    href: "/plugins/business-table/",
  },
  {
    title: "Business Text",
    name: "business-text",
    description: (
      <>
        Allows to convert plain text and table data into visually appealing,
        easy-to-read information cards.
      </>
    ),
    href: "/plugins/business-text/",
  },
  {
    title: "Business Variable",
    name: "business-variable",
    description: (
      <>
        Allows you to have dashboard filters in a separate panel to place
        anywhere on the dashboard.
      </>
    ),
    href: "/plugins/business-variable/",
  },
  {
    title: "Enterprise Support",
    name: "support",
    description: (
      <>
        Contact us via Zendesk, receive priority in feature requests and bug
        fixes, meet with us for in-person consultation.
      </>
    ),
    href: "/pricing/",
  },
];
