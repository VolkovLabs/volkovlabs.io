/**
 * Sidebar
 */
const mySidebar = [
  "index",
  "getting-started",
  {
    items: [
      "alerting-vs-big",
      "alerting-panel",
      "engine",
    ],
    label: "Alerting",
    type: "category",
    collapsible: false,
    link: {
      type: "doc",
      id: "alerting",
    },
  },
  {
    type: "link",
    href: "/blog/tags/business-intelligence",
    label: "Related Blog posts",
  },
  "release",
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
