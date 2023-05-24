/**
 * Sidebar
 */
const mySidebar = [
  "index",
  {
    items: [
      "annotations",
      "business",
      "customize",
      "variables",
      "allow-unsigned",
    ],
    label: "Getting Started",
    type: "category",
    collapsible: false,
  },
  {
    items: ["datasources/json", "storage", "iot"],
    label: "Advanced",
    type: "category",
    collapsible: false,
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
