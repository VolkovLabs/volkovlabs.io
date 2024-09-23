import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";

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
              We can provide quotes, give bulk pricing, and answer any sales or
              contract-related questions you may have.
            </p>

            <p className="hero__subtitle">
              Email <b>support at volkovlabs.io</b> and start a conversation.
            </p>
          </div>

          <div className="col col--5 text--center">
            <ThemedImage
              className={clsx("margin-vert--md")}
              sources={{
                light: useBaseUrl("/img/index/support.svg"),
                dark: useBaseUrl("/img/index/support.dark.svg"),
              }}
              height={"65%"}
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
      <div id="Plans" className="container margin-vert--md">
        <stripe-pricing-table
          pricing-table-id="prctbl_1Q1uoCEiej5nUsoj5F4znGwo"
          publishable-key="pk_live_51Q1pMcEiej5nUsojvz6cu1k1QH1R5mAHwWz1OotLIAh9qaQiXa70MjggtWr2bsmPqmUIZ6x5b7W9I6VD8QCE4ZxK00GBzofXYZ"
        ></stripe-pricing-table>
      </div>

      <div className={clsx("container margin-vert--xl")} />
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
      </Head>
      <Header siteConfig={siteConfig}></Header>
      <Main siteConfig={siteConfig}></Main>
    </Layout>
  );
};

export default Home;
