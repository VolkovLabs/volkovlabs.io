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
      "developer/index",
      "developer/panel"],
    label: "Developer",
    type: "category",
    collapsible: false,
    link: {
      type: "doc",
      id: "developer/index",
    },
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
