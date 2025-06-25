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
                <b>Priority Features</b>: Enjoy prioritized feature requests and
                rapid bug fixes tailored to your needs.
              </li>
              <li>
                <b>Consulting</b>: Schedule personalized consultations to
                optimize your workflows.
              </li>
              <li>
                <a href="/big">
                  <b>Business Intelligence</b>
                </a>
                : Unlock advanced insights with our Business Intelligence
                platform.
              </li>
            </ul>
            Your success drives us—let’s build something extraordinary together.
          </p>
        </div>
      </div>
      <div className="margin-vert--lg">
        <a
          className={clsx(
            "button button--primary button--lg",
            styles.getStarted
          )}
          href="https://pay.volkovlabs.io/p/login/6oEaGicwRgZ8gko144"
          target="_blank"
          rel="noopener noreferrer"
        >
          Partner Portal →
        </a>
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
    <section id="Team" className="container margin-vert--xl">
      <div className="col margin-vert--md text--center">
        <Youtube id="XDhyEXqa6KA" />
      </div>
    </section>

    <section className="hero hero--primary">
      <div className="container margin-vert--md">
        <div className="row align-items-center">
          <div className="col">
            <h2 className={clsx("hero__title")}>Core Business Tools</h2>
            <p className="hero__subtitle margin-vert--md">
              Streamline data visualization, capture user inputs, display
              dynamic text, and manage variables effortlessly, enabling your
              business workflows with seamless customization and efficiency.
            </p>
            <div className="margin-vert--lg">
              <script
                async
                src="https://js.stripe.com/v3/pricing-table.js"
              ></script>
              <stripe-pricing-table
                pricing-table-id="prctbl_1RczjtEiej5nUsojPKciPqXH"
                publishable-key="pk_live_51Q1pMcEiej5nUsojvz6cu1k1QH1R5mAHwWz1OotLIAh9qaQiXa70MjggtWr2bsmPqmUIZ6x5b7W9I6VD8QCE4ZxK00GBzofXYZ"
              ></stripe-pricing-table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hero">
      <div className="container margin-vert--md">
        <div className="row align-items-center">
          <div className="col">
            <h2 className={clsx("hero__title")}>Insight Business Tools</h2>
            <p className="hero__subtitle margin-vert--md">
              Seamlessly manage schedules, visualize data with dynamic charts,
              enhance navigation with smart links, and integrate rich media, all
              tailored to boost your business workflows with stunning clarity.
            </p>
            <div className="margin-vert--lg">
              <stripe-pricing-table
                pricing-table-id="prctbl_1Rdgu0Eiej5nUsoj3LlR8KnZ"
                publishable-key="pk_live_51Q1pMcEiej5nUsojvz6cu1k1QH1R5mAHwWz1OotLIAh9qaQiXa70MjggtWr2bsmPqmUIZ6x5b7W9I6VD8QCE4ZxK00GBzofXYZ"
              ></stripe-pricing-table>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hero hero--primary">
      <div className="container margin-vert--md">
        <div className="row align-items-center">
          <div className="col">
            <h2 className={clsx("hero__title")}>
              Business Intelligence platform
            </h2>
            <p className="hero__subtitle margin-vert--md">
              Transform your analytics with the Business Intelligence platform
              for high-performance, scalable, and alert-driven insights in
              Grafana.
            </p>
            <div className="margin-vert--lg">
              <script
                async
                src="https://js.stripe.com/v3/pricing-table.js"
              ></script>
              <stripe-pricing-table
                pricing-table-id="prctbl_1RdhO9Eiej5nUsojctbZydKh"
                publishable-key="pk_live_51Q1pMcEiej5nUsojvz6cu1k1QH1R5mAHwWz1OotLIAh9qaQiXa70MjggtWr2bsmPqmUIZ6x5b7W9I6VD8QCE4ZxK00GBzofXYZ"
              ></stripe-pricing-table>
            </div>
          </div>
        </div>
      </div>
    </section>

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
