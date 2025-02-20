import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import { Intelligence, Plugins } from "../components";
import Blogs from "../components/Blogs";
import styles from "../css/index.module.css";

/**
 * Header
 */
const Header = (siteConfig) => {
  return (
    <header>
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--7">
            <p className="hero__subtitle">
              Business Suite is a curated set of open-source Grafana plugins,
              crafted and diligently maintained by Volkov Labs.
            </p>

            <p className="hero__subtitle">
              Designed to tackle common business challenges, this collection
              offers an easy-to-use interface, complemented by comprehensive
              documentation, practical examples, and engaging video tutorials.
            </p>

            <div className="margin-vert--lg">
              <a
                className={clsx(
                  "button button--primary button--lg",
                  styles.getStarted
                )}
                href="/plugins/"
              >
                Documentation&nbsp;&nbsp;→
              </a>
            </div>
          </div>
          <div className="col col--5">
            <a href="/plugins/">
              <ThemedImage
                sources={{
                  light: useBaseUrl("/img/index/main.svg"),
                  dark: useBaseUrl("/img/index/main.dark.svg"),
                }}
                alt={siteConfig.tagline}
              />
            </a>
          </div>
        </div>

        <div className="container margin-vert--lg padding-vert--lg">
          <Plugins />
        </div>
      </div>
    </header>
  );
};

/**
 * Main
 */
const Main = (siteConfig) => {
  return (
    <main>
      <div className="container">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>Business Intelligence</span>
        </h2>
        <div className="container margin-vert--lg padding-vert--md">
          <p className="hero__subtitle margin-vert--md">
            Revolutionize Your Business Insights with High-Performance,
            Scalable, and Alert-Driven Analytics!
          </p>

          <div className="margin-vert--lg">
            <a
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted
              )}
              href="/big/getting-started"
            >
              Getting Started&nbsp;&nbsp;→
            </a>
          </div>
        </div>

        <div className="container margin-vert--lg padding-horiz--xl">
          <a href="/big/">
            <ThemedImage
              className={styles.big}
              sources={{
                light: useBaseUrl("/img/big/business-studio/engine.png"),
                dark: useBaseUrl("/img/big/business-studio/engine.dark.png"),
              }}
              alt={siteConfig.tagline}
            />
          </a>
        </div>

        <div className="container margin-vert--lg">
          <Intelligence />
        </div>
      </div>

      <div id="Blogs" className="container margin-vert--xl">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>Blog</span>
        </h2>

        <div className="container">&nbsp;</div>

        <div className="container">
          <Blogs />
        </div>
      </div>
    </main>
  );
};

/**
 * Home
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
      <Head>
        <meta property="og:image" content="/img/honeycomb.png" />
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=3103acc1-cdc9-4af8-a87c-b9a5c1eaa54d"
        ></script>
      </Head>
      <Header siteConfig={siteConfig}></Header>
      <Main siteConfig={siteConfig}></Main>
    </Layout>
  );
};

export default Home;
