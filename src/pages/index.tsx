import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import { Intelligence, Plugins } from "../components";
import styles from "../css/index.module.css";

/**
 * Header Component
 * Showcases Business Suite intro and plugins
 */
const Header = ({ siteConfig }) => (
  <header className="hero">
    <div className="container margin-vert--lg">
      <div className="row align-items-center">
        <div className="col col--7">
          <h1 className="hero__title margin-bottom--md">
            Business Suite for Grafana
          </h1>
          <p className="hero__subtitle">
            A curated collection of open-source Grafana plugins, crafted by
            Volkov Labs to solve everyday business challenges.
          </p>
          <p className="hero__subtitle">
            Enjoy an intuitive interface, detailed documentation, practical
            examples, and engaging video tutorials.
          </p>
          <div className="margin-vert--lg">
            <a
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted
              )}
              href="/plugins/"
            >
              Explore Plugins →
            </a>
          </div>
        </div>
        <div className="col col--5 text--center">
          <a href="/plugins/">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/index/main.svg"),
                dark: useBaseUrl("/img/index/main.dark.svg"),
              }}
              alt={siteConfig.tagline}
              className={styles.headerImage}
            />
          </a>
        </div>
      </div>
      <div className="margin-vert--lg padding-vert--lg">
        <Plugins />
      </div>
    </div>
  </header>
);

/**
 * Main Component
 * Highlights Business Intelligence and blog sections
 */
const Main = ({ siteConfig }) => (
  <main>
    <section className="container margin-vert--xl">
      <div className="row align-items-center margin-vert--lg padding-vert--md">
        <div className="col col--6">
          <h2 className={clsx("hero__title")}>Business Intelligence</h2>
          <p className="hero__subtitle margin-vert--md">
            Transform your insights with high-performance, scalable, and
            alert-driven analytics.
          </p>
          <div className="margin-vert--lg">
            <a
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted
              )}
              href="/big/getting-started"
            >
              Get Started →
            </a>
          </div>
        </div>
        <div className="col col--6 text--center">
          <a href="/big/">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/big/business-studio/engine.png"),
                dark: useBaseUrl("/img/big/business-studio/engine.dark.png"),
              }}
              alt={siteConfig.tagline}
              className={styles.big}
            />
          </a>
        </div>
      </div>
      <div className="margin-vert--lg">
        <Intelligence />
      </div>
    </section>
  </main>
);

/**
 * Home Component
 * Renders the landing page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Business Suite by Volkov Labs"
      description="Open-source Grafana plugins and Business Intelligence tools by Volkov Labs"
    >
      <Head>
        <meta property="og:image" content="/img/honeycomb.png" />
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=3103acc1-cdc9-4af8-a87c-b9a5c1eaa54d"
        />
      </Head>
      <Header siteConfig={siteConfig} />
      <Main siteConfig={siteConfig} />
    </Layout>
  );
};

export default Home;
