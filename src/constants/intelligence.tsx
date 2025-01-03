import React from "react";
import { PluginItem } from "../types";

/**
 * Intelligence List
 */
export const IntelligenceList: PluginItem[] = [
  {
    title: "High-Performance Business Engine",
    name: "business-engine",
    description: (
      <>
        Delivers robust performance with distributed load balancing and high
        availability, integrating seamlessly with Grafana.
      </>
    ),
    href: "/big/engine/",
  },
  {
    title: "User-Friendly Business Studio",
    name: "business-studio",
    description: (
      <>
        Simplifies management of Business Engines, allowing non-technical users
        to configure, monitor, and maintain data workflows.
      </>
    ),
    href: "/big/studio",
  },
  {
    title: "Advanced Business Alerts",
    name: "business-alerting",
    description: (
      <>
        Features alert systems based on Grafana panel queries, with support for
        customizable thresholds and variables, ensuring timely and relevant
        notifications for business metrics.
      </>
    ),
    href: "/big/alerting/",
  },
  //  {
  //    title: "Business Reporting",
  //    name: "business-reporting",
  //    description: <>Coming soon</>,
  //    href: "/big/",
  //  },
];
