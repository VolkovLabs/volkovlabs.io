/**
 * Footer Configuration
 * Defines the layout, logo, links, and copyright for the Volkov Labs footer
 */
export const FOOTER = {
  // Logo settings with light/dark mode support
  logo: {
    alt: "Volkov Labs Logo",
    src: "img/logo.svg",
    srcDark: "img/logo.svg",
    width: 150, // Optional: Adds consistent sizing; adjust as needed
  },

  // Theme style: 'light', 'dark', or 'auto' (Docusaurus default)
  style: "dark",

  // Link columns for navigation
  links: [
    {
      title: "Business Suite for Grafana",
      items: [
        {
          label: "Documentation",
          to: "/plugins/",
          className: "volkovlabs-footer-link icon-suite-link",
        },
        {
          label: "Release Dashboard",
          href: "https://release.volkovlabs.io",
          className: "volkovlabs-footer-link icon-release-link",
        },
        {
          label: "GitHub",
          href: "https://github.com/VolkovLabs",
          className: "volkovlabs-footer-link icon-github-link",
        },
        {
          label: "Support Portal",
          href: "https://support.volkovlabs.io",
          className: "volkovlabs-footer-link icon-support-link",
        },
      ],
    },
    {
      title: "Discover",
      items: [
        {
          label: "Business Gazette",
          to: "/blog/",
          className: "volkovlabs-footer-link icon-blog-link",
        },
        {
          label: "Grafana Crash Course",
          to: "/grafana/",
          className: "volkovlabs-footer-link icon-grafana-link",
        },
        {
          label: "PulseBI Platform",
          href: "https://pulsebi.studio",
          className: "volkovlabs-footer-link icon-pulsebi-link",
        },
        {
          label: "YouTube Channel",
          href: "https://youtube.com/@volkovlabs",
          className: "volkovlabs-footer-link icon-youtube-link",
        },
      ],
    },
    {
      title: "The Company",
      items: [
        {
          label: "About Us",
          to: "/team/",
          className: "volkovlabs-footer-link icon-team-link",
        },
        {
          label: "Privacy Policy",
          to: "/privacy/",
          className: "volkovlabs-footer-link icon-privacy-link",
        },
        {
          label: "Terms and Conditions",
          to: "/terms/",
          className: "volkovlabs-footer-link icon-terms-link",
        },
        {
          label: "Disclaimer",
          to: "/disclaimer/",
          className: "volkovlabs-footer-link icon-disclaimer-link",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/volkovlabs",
          className: "volkovlabs-footer-link icon-linkedin-link",
        },
      ],
    },
  ],

  // Dynamic copyright with company details
  copyright: `Copyright © ${new Date().getFullYear()} Volkov Labs. All rights reserved.`,
};
