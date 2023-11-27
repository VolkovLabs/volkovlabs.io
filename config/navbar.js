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
      to: "/blog/",
      position: "left",
      label: "Blog",
      "aria-label": "Blog",
    },
    {
      to: "/plugins/",
      position: "left",
      label: "Plugins",
      "aria-label": "Plugins",
    },
    {
      to: "/grafana/",
      position: "left",
      label: "Grafana Crash Course",
      "aria-label": "Grafana",
    },
    {
      to: "/big/",
      position: "left",
      label: "Business Intelligence",
      "aria-label": "Business Intelligence",
    },
    {
      to: "/support/",
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
