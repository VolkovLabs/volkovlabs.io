import React from "react";
import { PluginItem } from "../types";

/**
 * Project List
 */
export const ProjectList: PluginItem[] = [
  {
    title: "Apache ECharts Lite Panel",
    name: "volkovlabs-echarts-lite",
    description: <>Apache ECharts Core functionality, no extras.</>,
    href: "/plugins/volkovlabs-echarts-lite/",
  },
  {
    title: "Balena Application",
    name: "volkovlabs-balena-app",
    description: (
      <>
        Display device information and manage services using Balena Supervisor
        API.
      </>
    ),
    href: "/plugins/volkovlabs-balena-app/",
  },
  {
    title: "Environment Data Source",
    name: "volkovlabs-env-datasource",
    description: <>Environment variables on your dashboard.</>,
    href: "/plugins/volkovlabs-env-datasource/",
  },
  {
    title: "Plugin Templates",
    name: "template",
    description: <>Start from well-constructed template.</>,
    href: "/plugins/templates/",
  },
  {
    title: "Volkov Labs App",
    name: "volkovlabs-app",
    description: <>Docker image with customized Grafana.</>,
    href: "/plugins/volkovlabs-app/",
  },
];
