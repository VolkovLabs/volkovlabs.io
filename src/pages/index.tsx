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
  <header className="hero hero--primary">
    <div className="container margin-vert--md">
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
              aria-label="Explore Volkov Labs Grafana Plugins"
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
                light: useBaseUrl("/img/index/plugins/main.svg"),
                dark: useBaseUrl("/img/index/plugins/main.dark.svg"),
              }}
              alt={siteConfig.tagline}
              className={styles.headerImage}
            />
          </a>
        </div>
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
      <div className="margin-vert--lg">
        <Plugins />
      </div>
    </section>

    <section className="container margin-vert--xl text--center">
      <h2 className="hero__title">Trusted by Grafana Community</h2>
      <div className="row margin-vert--lg">
        <div className="col col--4">
          <h3>38M+</h3>
          <p>Downloads</p>
        </div>
        <div className="col col--4">
          <h3>100K+</h3>
          <p>Installations</p>
        </div>
        <div className="col col--4">
          <h3>1K+</h3>
          <p>Active Users</p>
        </div>
      </div>
    </section>

    <section className="hero hero--primary">
      <div className="container margin-vert--md">
        <div className="row align-items-center">
          <div className="col col--7">
            <h2 className={clsx("hero__title")}>Business Intelligence</h2>
            <p className="hero__subtitle margin-vert--md">
              Tailored to address real-world production demands, this platform
              revolutionizes alerting and analytics in Grafana.
            </p>
            <p className="hero__subtitle">
              Business Alerting offers streamlined interactions, centralized
              management, and advanced features like high availability and load
              balancing.
            </p>
            <div className="margin-vert--lg">
              <a
                className={clsx(
                  "button button--primary button--lg",
                  styles.getStarted
                )}
                href="/big/"
              >
                Get Started →
              </a>
            </div>
          </div>
          <div className="col col--5 text--center">
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
      </div>
    </section>

    <section className="container margin-vert--xl">
      <div className="margin-vert--lg">
        <Intelligence />
      </div>
    </section>

    <section className="container margin-vert--xl">
      <div className="text--center margin-vert--lg">
        <h2 className="hero__title">Join Our Community</h2>
        <p className="hero__subtitle">
          Stay updated with the latest news, tutorials, and releases from Volkov
          Labs.
        </p>
        <div className="margin-vert--md">
          <a
            className={clsx(
              "button button--primary button--lg",
              styles.getStarted
            )}
            href="/blog/"
            aria-label="Read Business Gazette"
          >
            Business Gazette
          </a>
          <a
            className={clsx(
              "button button--secondary button--lg margin-left--md",
              styles.getStarted
            )}
            href="https://youtube.com/@volkovlabs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Volkov Labs on youTube"
          >
            Subscribe to YouTube Channel
          </a>
        </div>
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
