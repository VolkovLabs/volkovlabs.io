/**
 * Sidebar
 */
const mySidebar = [
  "index",
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
