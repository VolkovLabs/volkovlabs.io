import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import { Intelligence, CorePlugins, InsightPlugins } from "../components";
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
 */
const Main = ({ siteConfig }) => (
  <main>
    <section className="hero">
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
              <CorePlugins />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hero hero--primary">
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
              <InsightPlugins />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container margin-vert--xl text--center">
      <h2 className="hero__title">Trusted by Grafana Community</h2>
      <div className="row margin-vert--lg">
        <div className="col col--4">
          <h3>40M+</h3>
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
            <h2 className={clsx("hero__title")}>Business Gazette</h2>
            <p className="hero__subtitle margin-vert--md">
              Stay updated with the latest news, tutorials, and releases from
              Volkov Labs.
            </p>
            <div className="margin-vert--lg">
              <a
                className={clsx(
                  "button button--primary button--lg",
                  styles.getStarted
                )}
                href="/blog/"
                aria-label="Read Business Gazette"
              >
                Check out the freshest news, hot off the press!
              </a>
            </div>
          </div>
          <div className="col col--5 text--center">
            <a href="/blog/">
              <ThemedImage
                sources={{
                  light: useBaseUrl("/img/index/gazette.svg"),
                  dark: useBaseUrl("/img/index/gazette.dark.svg"),
                }}
                width="50%"
                alt={siteConfig.tagline}
                className={styles.headerImage}
              />
            </a>
          </div>
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
      description="Open-source Grafana plugins by Volkov Labs"
    >
      <Head>
        <meta property="og:image" content="/img/suite.png" />
      </Head>
      <Header siteConfig={siteConfig} />
      <Main siteConfig={siteConfig} />
    </Layout>
  );
};

export default Home;
