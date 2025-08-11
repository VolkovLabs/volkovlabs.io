import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "../css/index.module.css";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

/**
 * Header Component
 * Introduces Business Suite Enterprise benefits and video
 */
const Header = () => (
  <header className="hero hero--primary">
    <div className="container margin-vert--md">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="hero__title margin-bottom--md">
            Business Suite Enterprise
          </h1>
          <p className="hero__subtitle margin-vert--md">
            Partner with us and enjoy peace of mind with a dedicated support
            team prepared to address your challenges effectively.
          </p>
          <p className="hero__subtitle">
            <ul>
              <li>
                <a href="/team">
                  <b>Dedicated Support</b>
                </a>
                : Access our expert team via Zendesk for fast issue resolution.
              </li>
              <li>
                <a href="https://support.volkovlabs.io">
                  <b>Priority Features</b>
                </a>
                : Enjoy prioritized feature requests and rapid bug fixes
                tailored to your needs.
              </li>
              <li>
                <a href="https://pulsebi.studio">
                  <b>PulseBI Platform</b>
                </a>
                : Tailored to address real-world production demands, this
                platform revolutionizes alerting and analytics in Grafana..
              </li>
            </ul>
            Your success drives us—let’s build something extraordinary together.
          </p>
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
    <section className="hero">
      <div className="container margin-vert--md">
        <div className="row align-items-center">
          <div className="col col--7">
            <h2 className={clsx("hero__title")}>Get in Touch</h2>
            <p className="hero__subtitle margin-vert--md">
              Ready to start? Click on <b>Support</b> to begin the
              conversation—we’re excited to connect!
            </p>
          </div>
          <div className="col col--5 text--center">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/plugins/support/logo.svg"),
                dark: useBaseUrl("/img/plugins/support/logo.dark.svg"),
              }}
              width="50%"
              className={styles.headerImage}
            />
          </div>
        </div>
      </div>
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
        <meta property="og:image" content="/img/suite.png" />
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
