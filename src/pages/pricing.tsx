import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Youtube from "@theme/Youtube";
import styles from "../css/index.module.css";

/**
 * Header Component
 * Introduces Business Suite Enterprise benefits and video
 */
const Header = () => (
  <header className="hero">
    <div className="container margin-vert--lg">
      <div className="row align-items-center">
        <div className="col col--7">
          <h1 className="hero__title margin-bottom--md">
            Business Suite Enterprise
          </h1>
          <p className="hero__subtitle margin-vert--md">
            Partner with us and enjoy peace of mind with a dedicated support
            team prepared to address your challenges effectively.
          </p>
          <p className="hero__subtitle">
            Connect via{" "}
            <a
              href="https://support.volkovlabs.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zendesk
            </a>
            , enjoy prioritized feature requests and bug fixes, schedule
            in-person consultations, and leverage our{" "}
            <a href="/big/">Business Intelligence</a> platform. Your success
            drives us.
          </p>
        </div>
        <div className="col col--5 margin-vert--lg text--center">
          <Youtube id="XDhyEXqa6KA" />
        </div>
      </div>
    </div>
  </header>
);

/**
 * Main Component
 * Displays pricing plans and contact section
 */
const Main = () => (
  <main>
    <section id="Contact" className="container margin-vert--xl text--center">
      <h2 className="hero__title margin-vert--md">Get in Touch</h2>
      <p className="hero__subtitle margin-vert--md">
        Ready to start? Click on <b>Support</b> to begin the conversation—we’re
        excited to connect!
      </p>
    </section>
  </main>
);

/**
 * Home Component
 * Renders the Business Suite Enterprise page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Business Suite Enterprise | Volkov Labs"
      description="Enterprise support and Business Intelligence platform for Grafana by Volkov Labs"
    >
      <Head>
        <meta property="og:image" content="/img/honeycomb.png" />
        <script async src="https://js.stripe.com/v3/pricing-table.js" />
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=3103acc1-cdc9-4af8-a87c-b9a5c1eaa54d"
        />
      </Head>
      <Header />
      <Main />
    </Layout>
  );
};

export default Home;
