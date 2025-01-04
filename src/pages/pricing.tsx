import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "../css/index.module.css";
import Youtube from "@theme/Youtube";

/**
 * Header
 */
const Header = () => {
  return (
    <header>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--7 margin-vert--lg">
            <p className="hero__subtitle margin-vert--md">
              With the Business Suite Enterprise, you're not just getting a
              product, you're getting a complete support system. You'll have a
              designated support team ready to tackle any issues.
            </p>
            <p className="hero__subtitle">
              You can contact us via Zendesk, receive priority in feature
              requests and bug fixes, meet with us for in-person consultation,
              and get access to the <a href="/big/">Business Intelligence</a>{" "}
              platform.
            </p>

            <div className="margin-vert--lg">
              <a
                className={clsx(
                  "button button--primary button--lg",
                  styles.getStarted
                )}
                href="https://pay.volkovlabs.io/p/login/6oEaGicwRgZ8gko144"
                target="_blank"
              >
                Customer Portal&nbsp;&nbsp;→
              </a>
            </div>
          </div>

          <div className="col col--5 margin-vert--lg">
            <Youtube id="XDhyEXqa6KA" index />
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
      <div id="Plans" className="container margin-vert--md">
        <div className="col col-12 margin-vert--xl">
          <stripe-pricing-table
            pricing-table-id="prctbl_1Q1uoCEiej5nUsoj5F4znGwo"
            publishable-key="pk_live_51Q1pMcEiej5nUsojvz6cu1k1QH1R5mAHwWz1OotLIAh9qaQiXa70MjggtWr2bsmPqmUIZ6x5b7W9I6VD8QCE4ZxK00GBzofXYZ"
          ></stripe-pricing-table>
        </div>
      </div>

      <div id="Contact" className="container margin-vert--xl">
        <div className="row">
          <div className="col col--12 margin-vert--md">
            <p className="hero__subtitle margin-vert--md">
              Click on <b>Support</b> to get in touch with us. We're excited to
              begin a dialogue.
            </p>
          </div>
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
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
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
