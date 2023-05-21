/**
 * Sidebar
 */
const mySidebar = [
  "index",
  {
    items: [
      "annotations",
      "customize",
      "datasources/json",
      "variables",
      "allow-unsigned",
    ],
    label: "Tutorials",
    type: "category",
    collapsible: false,
  },
  {
    items: ["business", "iot"],
    label: "Use Cases",
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
