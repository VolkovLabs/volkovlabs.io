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
          label: "Introduction",
          to: "/plugins/",
          className: "volkovlabs-footer-link icon-suite-link",
        },
        {
          label: "Security Guidelines",
          to: "/plugins/security/",
          className: "volkovlabs-footer-link icon-security-link",
        },
        {
          label: "Enterprise Support",
          to: "/pricing/",
          className: "volkovlabs-footer-link icon-support-link",
        },
        {
          label: "Release Dashboard",
          href: "https://release.volkovlabs.io",
          className: "volkovlabs-footer-link icon-release-link",
        },
      ],
    },
    {
      title: "Business Intelligence",
      items: [
        {
          label: "Getting started",
          href: "/big/getting-started/",
          className: "volkovlabs-footer-link icon-big-getting-started-link",
        },
        {
          label: "Business Alerting",
          href: "/big/alerting/",
          className: "volkovlabs-footer-link icon-big-alerting-link",
        },
        {
          label: "REST API",
          href: "/big/api/",
          className: "volkovlabs-footer-link icon-big-rest-api-link",
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
          label: "Grafana Crash Course",
          href: "/grafana/",
          className: "volkovlabs-footer-link icon-grafana-link",
        },
        {
          label: "Environment data source",
          to: "/grafana/environment/",
          className: "volkovlabs-footer-link icon-plugins-env-link",
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
          label: "GitHub",
          href: "https://github.com/VolkovLabs",
          className: "volkovlabs-footer-link icon-github-link",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/volkovlabs",
          className: "volkovlabs-footer-link icon-linkedin-link",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Volkov Labs, USA. All rights reserved.`,
};
