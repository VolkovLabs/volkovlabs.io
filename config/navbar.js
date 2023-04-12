/**
 * Navigation Bar
 */
const navbar = {
  hideOnScroll: true,
  logo: {
    alt: "Volkov Labs",
    src: "img/logo.svg",
    srcDark: "img/logo.dark.svg",
  },
  items: [
    {
      label: "Grafana Plugins",
      position: "left",
      href: "/#Plugins",
    },
    {
      href: "/blog/",
      position: "left",
      label: "Blog",
    },
    {
      href: "/plugins/",
      position: "left",
      label: "Documentation",
    },
    {
      href: "/support/",
      position: "left",
      label: "Support",
    },
    {
      href: "https://www.youtube.com/@volkovlabs",
      position: "right",
      className: "header-youtube-link",
      "aria-label": "YouTube Channel",
    },
    {
      href: "https://github.com/VolkovLabs",
      position: "right",
      className: "header-github-link",
      "aria-label": "GitHub Organization",
    },
  ],
};

module.exports = navbar;
