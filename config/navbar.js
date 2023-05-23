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
      href: "/blog/",
      position: "left",
      label: "Blog",
      "aria-label": "Blog",
    },
    {
      href: "/plugins/",
      position: "left",
      label: "Documentation",
      "aria-label": "Documentation",
    },
    {
      href: "/grafana/",
      position: "left",
      label: "Grafana Crash Course",
      "aria-label": "Grafana",
    },
    {
      href: "/support/",
      position: "left",
      label: "Support",
      "aria-label": "Support",
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
