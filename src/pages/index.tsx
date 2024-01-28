import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import { Plugins } from "../components";
import Blogs from "../components/Blogs";
import styles from "../css/index.module.css";

/**
 * Header
 */
const Header = (siteConfig) => {
  return (
    <header>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--7 margin-vert--lg">
            <h1 className="hero__title margin-vert--lg">
              {siteConfig.tagline}
            </h1>

            <p className="hero__subtitle margin-vert--md">
              We specialize in creating plugins that enable you to visualize
              your data on the Grafana platform.
            </p>

            <p className="hero__subtitle">
              Our Grafana plugins are enriched with JavaScript, providing you
              with unparalleled customization options.
            </p>

            <div className="margin-vert--lg">
              <a
                className={clsx(
                  "button button--primary button--lg",
                  styles.getStarted
                )}
                href="/plugins/"
              >
                Open-Source Plugins&nbsp;&nbsp;→
              </a>
            </div>
          </div>
          <div className="col col--5">
            <ThemedImage
              className={clsx(styles.heroBannerLogo, "margin-vert--md")}
              sources={{
                light: useBaseUrl("/img/index/main.svg"),
                dark: useBaseUrl("/img/index/main.dark.svg"),
              }}
              alt={siteConfig.tagline}
            />
          </div>
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
      <div id="Plugins" className="container margin-vert--md padding-vert--md">
        <h2 className={clsx(styles.header, "hero__title")} />

        <div className="container margin-vert--md padding-vert--lg">
          <Plugins />
        </div>
      </div>

      <div id="Plugins" className="container margin-vert--md padding-vert--md">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>BI(G)</span>
        </h2>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--7 margin-vert--lg">
              <h1 className="hero__title margin-vert--lg">
                {siteConfig.tagline}
              </h1>

              <p className="hero__subtitle margin-vert--md">
                Business Intelligence for Grafana simplifies alerting for
                business users, providing them with an accessible platform.
              </p>

              <div className="margin-vert--lg">
                <a
                  className={clsx(
                    "button button--primary button--lg",
                    styles.getStarted
                  )}
                  href="/big/"
                >
                  Learn More&nbsp;&nbsp;→
                </a>
              </div>
            </div>
            <div className="col col--5">
              <ThemedImage
                className={clsx(styles.heroBannerLogo, "margin-vert--md")}
                sources={{
                  light: useBaseUrl("/img/index/big.svg"),
                  dark: useBaseUrl("/img/index/big.dark.svg"),
                }}
                alt="Business Intelligence for Grafana"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="Blogs" className="container margin-vert--md padding-vert--md">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>Blog</span>
        </h2>

        <div className="container margin-vert--md padding-vert--lg">
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
        <meta property="og:image" content="/img/volkovlabs.png" />
      </Head>
      <Header siteConfig={siteConfig}></Header>
      <Main siteConfig={siteConfig}></Main>
    </Layout>
  );
};

export default Home;
