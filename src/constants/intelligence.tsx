import React from "react";
import { PluginItem } from "../types";

/**
 * IntelligenceList
 * A collection of Business Intelligence plugins for Grafana by Volkov Labs.
 */
export const IntelligenceList: PluginItem[] = [
  {
    title: "High-Performance Business Engine",
    name: "business-engine",
    description: (
      <>
        Provides robust performance with distributed load balancing and high
        availability, seamlessly integrating with Grafana for efficient data
        processing.
      </>
    ),
    href: "/big/engine/",
    isActive: true, // Optional: Indicates active status
  },
  {
    title: "User-Friendly Business Studio",
    name: "business-studio",
    description: (
      <>
        Simplifies Business Engine management, empowering non-technical users to
        configure, monitor, and maintain data workflows effortlessly.
      </>
    ),
    href: "/big/studio/",
    isActive: true,
  },
  {
    title: "Advanced Business Alerts",
    name: "business-alerting",
    description: (
      <>
        Offers customizable alert systems tied to Grafana panel queries, with
        support for thresholds and variables to deliver timely, relevant
        business metric notifications.
      </>
    ),
    href: "/big/alerting/",
    isActive: true,
  },
];
