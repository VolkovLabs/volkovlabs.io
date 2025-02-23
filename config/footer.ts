/**
 * Footer
 */
export const FOOTER = {
  logo: {
    alt: "Volkov Labs",
    src: "img/logo.svg",
    srcDark: "img/logo.dark.svg",
  },
  style: "light",
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
          label: "Getting started",
          href: "/big/getting-started/",
          className: "volkovlabs-footer-link icon-big-link",
        },
        {
          label: "Business Studio",
          href: "/big/studio/",
          className: "volkovlabs-footer-link icon-big-studio-link",
        },
        {
          label: "Business Engine",
          href: "/big/engine/",
          className: "volkovlabs-footer-link icon-big-engine-link",
        },
        {
          label: "Business Alerting",
          href: "/big/alerting/",
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
          label: "Blog",
          href: "/blog/",
          className: "volkovlabs-footer-link icon-blog-link",
        },
        {
          label: "Business Gazette",
          to: "/blog/tags/business-gazette",
          className: "volkovlabs-footer-link icon-gazette-link",
        },
        {
          label: "Grafana Crash Course",
          href: "/grafana/",
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
          label: "About",
          href: "/team/",
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
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Volkov Labs based in Tampa, Florida, USA. All rights reserved.`,
};
