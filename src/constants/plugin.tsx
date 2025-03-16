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
        Showcases events in an elegant calendar view, sourced from various data
        inputs.
      </>
    ),
    href: "/plugins/business-calendar/",
  },
  {
    title: "Business Charts",
    name: "business-charts",
    description: (
      <>
        Brings Apache ECharts' dynamic charts and graphs to your Grafana
        dashboards.
      </>
    ),
    href: "/plugins/business-charts/",
  },
  {
    title: "Business Forms",
    name: "business-forms",
    description: (
      <>
        Enables data entry, updates, and configuration changes directly within
        Grafana.
      </>
    ),
    href: "/plugins/business-forms/",
  },
  {
    title: "Business Input",
    name: "business-input",
    description: (
      <>
        Emulates and stores data using JavaScript and LLM for flexible data
        management.
      </>
    ),
    href: "/plugins/business-input/",
  },
  {
    title: "Business Media",
    name: "business-media",
    description: (
      <>
        Combines multimedia formats for a customized visual experience in
        Grafana.
      </>
    ),
    href: "/plugins/business-media/",
  },
  {
    title: "Business News",
    name: "business-news",
    description: (
      <>
        Fetches RSS and Atom feeds for visualization with Business Text and
        other panels.
      </>
    ),
    href: "/plugins/business-news/",
  },
  {
    title: "Business Satellite",
    name: "business-satellite",
    description: (
      <>Retrieves data from local or remote Grafana instances via HTTP API.</>
    ),
    href: "/plugins/business-satellite/",
  },
  {
    title: "Business Table",
    name: "business-table",
    description: (
      <>Simplifies data presentation with intuitive table layouts.</>
    ),
    href: "/plugins/business-table/",
  },
  {
    title: "Business Text",
    name: "business-text",
    description: (
      <>
        Transforms plain text and tables into visually engaging information
        cards.
      </>
    ),
    href: "/plugins/business-text/",
  },
  {
    title: "Business Variable",
    name: "business-variable",
    description: (
      <>Adds flexible dashboard filters in a movable, standalone panel.</>
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
