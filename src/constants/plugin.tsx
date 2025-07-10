import React from "react";
import { PluginItem } from "../types";

/**
 * PluginList
 * A collection of Business Suite plugins for Grafana by Volkov Labs, enhancing data visualization and management.
 */
export const PluginList: PluginItem[] = [
  {
    title: "Business Calendar",
    name: "business-calendar",
    description: (
      <>
        Displays events in a sleek calendar view, pulling from diverse data
        sources for seamless integration.
      </>
    ),
    href: "/plugins/business-calendar/",
    isActive: true,
  },
  {
    title: "Business Charts",
    name: "business-charts",
    description: (
      <>
        Integrates Apache ECharts to deliver dynamic, interactive charts and
        graphs within Grafana dashboards.
      </>
    ),
    href: "/plugins/business-charts/",
    isActive: true,
  },
  {
    title: "Business Forms",
    name: "business-forms",
    description: (
      <>
        Enables direct data entry, updates, and configuration adjustments right
        inside Grafana.
      </>
    ),
    href: "/plugins/business-forms/",
    isActive: true,
  },
  {
    title: "Business Input",
    name: "business-input",
    description: (
      <>
        Simulates and manages data with JavaScript and LLM, offering flexible
        control within Grafana.
      </>
    ),
    href: "/plugins/business-input/",
    isActive: true,
  },
  {
    title: "Business Links",
    name: "business-links",
    description: (
      <>
        Streamlines navigation with external links, dashboards, and dropdowns.
      </>
    ),
    href: "/plugins/business-links/",
    isActive: true,
  },
  {
    title: "Business Media",
    name: "business-media",
    description: (
      <>
        Blends multimedia elements for a tailored, rich visual experience in
        Grafana dashboards.
      </>
    ),
    href: "/plugins/business-media/",
    isActive: true,
  },
  {
    title: "Business Table",
    name: "business-table",
    description: (
      <>Simplifies data presentation with intuitive table layouts.</>
    ),
    href: "/plugins/business-table/",
    isActive: true,
  },
  {
    title: "Business Text",
    name: "business-text",
    description: (
      <>
        Turns plain text and tables into compelling, visually rich information
        cards.
      </>
    ),
    href: "/plugins/business-text/",
    isActive: true,
  },
  {
    title: "Business Variable",
    name: "business-variable",
    description: (
      <>
        Enhances dashboards with movable, standalone filter panels for dynamic
        control.
      </>
    ),
    href: "/plugins/business-variable/",
    isActive: true,
  },
];
