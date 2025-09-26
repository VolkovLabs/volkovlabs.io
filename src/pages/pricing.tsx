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
          <h1 className="hero__title margin-bottom--md">Closed For Business</h1>
          <p className="hero__subtitle margin-vert--md">
            What This Means for Our Community
          </p>
          <p className="hero__subtitle">
            <ul>
              <li>
                <b>Development Freeze</b>: No new features, updates, or
                compatibility releases for the Business Suite plugins will be
                developed.
              </li>
              <li>
                <b>End of Support</b>: As of September 26, 2025, we will no
                longer provide technical support, bug fixes, or community
                assistance for the Business Suite via GitHub, YouTube, or other
                channels.
              </li>
              <li>
                <b>Open-Source Access</b>: The Business Suite repositories will
                remain accessible on GitHub under their current licenses, but we
                encourage users to fork or archive them as needed, as no further
                maintenance will occur.
              </li>
            </ul>
            We wish you all the best in your Grafana journeys. Thank you for
            being part of ours.
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
const Main = () => <main />;

/**
 * Home Component
 * Renders the Business Suite Enterprise page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Business Suite Enterprise | Volkov Labs"
      description="Enterprise support for Business Suite by Volkov Labs"
    >
      <Head>
        <meta property="og:image" content="/img/suite.png" />
      </Head>
      <Header />
      <Main />
    </Layout>
  );
};

export default Home;
