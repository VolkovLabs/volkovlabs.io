import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import { Plugins, Components } from "../components";
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
            <p className="hero__subtitle margin-vert--md">
              The Business Suite is a collection of open source plugins for
              Grafana created and actively maintained by Volkov Labs.
            </p>

            <p className="hero__subtitle">
              The collection aims to solve the most frequent business tasks by
              providing an intuitive interface with detailed written
              documentation, examples, and video tutorials.
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
            <ThemedImage
              className={clsx(styles.heroBannerLogo, "margin-vert--lg")}
              sources={{
                light: useBaseUrl("/img/index/main.svg"),
                dark: useBaseUrl("/img/index/main.dark.svg"),
              }}
              alt={siteConfig.tagline}
            />
          </div>
        </div>

        <div className="container margin-vert--md padding-vert--lg">
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
      <div id="Plugins" className="container margin-vert--md padding-vert--md">
        <h2 className={clsx(styles.header, "hero__title")} />
        <div className="container">
          <div className="row">
            <div className="col col--8 margin-vert--lg">
              <h1 className="hero__title margin-vert--lg">
                {siteConfig.tagline}
              </h1>

              <p className="hero__subtitle margin-vert--md">
                The Business Intelligence simplifies alerting for business
                users, providing them with an accessible platform.
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
            <div className="col col--4 margin-vert--md">
              <ThemedImage
                className={clsx(styles.heroBannerLogo)}
                sources={{
                  light: useBaseUrl("/img/index/intelligence.svg"),
                  dark: useBaseUrl("/img/index/intelligence.dark.svg"),
                }}
                alt="Business Intelligence"
              />
            </div>
          </div>
        </div>

        <div className="container margin-vert--md padding-vert--lg">
          <Components />
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
