/**
 * Sidebar
 */
const mySidebar = [
  "index",
  {
    items: ["health-checks"],
    label: "Getting Started",
    type: "category",
    collapsible: false,
    link: {
      type: "doc",
      id: "getting-started",
    },
  },

  {
    items: ["big-alerting", "alerting-panel", "engine", "thresholds"],
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
