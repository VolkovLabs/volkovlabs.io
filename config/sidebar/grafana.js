/**
 * Sidebar
 */
const mySidebar = [
  "index",
  {
    items: [
      "installation",
      "annotations",
      "business",
      "customize",
      "provisioning",
      "transformations",
      "variables",
      "timeseries",
      "allow-unsigned",
    ],
    label: "Getting Started",
    type: "category",
    collapsible: false,
    link: {
      type: "doc",
      id: "started",
    },
  },
  {
    items: ["datasources/json", "storage", "iot"],
    label: "Advanced",
    type: "category",
    collapsible: false,
    link: {
      type: "doc",
      id: "advanced/index",
    },
  },
  {
    items: [
      "developer/overview",
      "developer/thinkbig",
      "developer/panel",
      "developer/eventbus",
    ],
    label: "Developer",
    type: "category",
    collapsible: false,
    link: {
      type: "doc",
      id: "developer/index",
    },
  },
  {
    type: "link",
    href: "/blog/tags/grafana-crash-course",
    label: "Related Blog posts",
  },
];

/**
 * Sidebars
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mySidebar,
};

module.exports = sidebars;
