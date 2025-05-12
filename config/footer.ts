/**
 * Footer Configuration
 * Defines the layout, logo, links, and copyright for the Volkov Labs footer
 */
export const FOOTER = {
  // Logo settings with light/dark mode support
  logo: {
    alt: "Volkov Labs Logo",
    src: "img/logo.svg",
    srcDark: "img/logo.dark.svg",
    width: 150, // Optional: Adds consistent sizing; adjust as needed
  },

  // Theme style: 'light', 'dark', or 'auto' (Docusaurus default)
  style: "light",

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
          label: "Security Guidelines",
          to: "/plugins/security/",
          className: "volkovlabs-footer-link icon-security-link",
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
      ],
    },
    {
      title: "Business Intelligence",
      items: [
        {
          label: "Quick Start",
          to: "/big/quick-start/",
          className: "volkovlabs-footer-link icon-big-link",
        },
        {
          label: "Business Studio",
          to: "/big/studio/",
          className: "volkovlabs-footer-link icon-big-studio-link",
        },
        {
          label: "Business Engine",
          to: "/big/engine/",
          className: "volkovlabs-footer-link icon-big-engine-link",
        },
        {
          label: "Business Alerting",
          to: "/big/alerting/",
          className: "volkovlabs-footer-link icon-big-alerting-link",
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
          label: "Blog Posts",
          to: "/blog/",
          className: "volkovlabs-footer-link icon-blog-link",
        },
        {
          label: "Business Gazette",
          to: "/blog/tags/business-gazette",
          className: "volkovlabs-footer-link icon-gazette-link",
        },
        {
          label: "Grafana Crash Course",
          to: "/grafana/",
          className: "volkovlabs-footer-link icon-grafana-link",
        },
        {
          label: "YouTube Channel",
          href: "https://youtube.com/@volkovlabs",
          className: "volkovlabs-footer-link icon-youtube-link",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/volkovlabs",
          className: "volkovlabs-footer-link icon-linkedin-link",
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
          label: "EULA",
          to: "/eula/",
          className: "volkovlabs-footer-link icon-eula-link",
        },
        {
          label: "Disclaimer",
          to: "/disclaimer/",
          className: "volkovlabs-footer-link icon-disclaimer-link",
        },
        {
          label: "Style Guide",
          to: "/style/",
          className: "volkovlabs-footer-link icon-style-link",
        },
      ],
    },
  ],

  // Dynamic copyright with company details
  copyright: `Copyright © ${new Date().getFullYear()} Volkov Labs, Tampa, FL, USA. All rights reserved.`,
};
