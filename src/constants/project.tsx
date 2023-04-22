import React from "react";
import { PluginItem } from "../types";

/**
 * Project List
 */
export const ProjectList: PluginItem[] = [
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
    title: "Plugin Templates",
    name: "template",
    description: <>Start from well-constructed template.</>,
    href: "/plugins/templates/",
  },
  {
    title: "Volkov Labs Application",
    name: "volkovlabs-app",
    description: <>Custom Docker image with Grafana.</>,
    href: "/plugins/volkovlabs-app/",
  },
];
