import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import styles from "../css/index.module.css";
import Image from "@theme/Image";

/**
 * Header
 */
const Header = () => {
  return (
    <header>
      <div className="container margin-vert--md">
        <div className="row">
          <div className="col col--12 margin-vert--md">
            <p className="hero__subtitle margin-vert--md">
              Open source is at the core of Volkov Labs. We are passionate about
              the idea of sharing and exchanging ideas without boundaries.
            </p>

            <p className="hero__subtitle">
              Over the past three years, we have spearheaded a significant
              open-source initiative, developing ten plugins for Grafana with a
              staggering 30 millions total downloads. Our commitment to this
              cause is evident in our best-in-class documentation, a dedicated
              YouTube channel, and a robust mechanism for addressing community
              queries.
            </p>

            <p className="hero__subtitle">
              Our brand became recognizable. Nearly anyone who ever worked with
              Grafana knows our name. We take immense pride in what we've been
              able to accomplish. Our journey in the open-source world, from
              creating a massive project to becoming a recognized brand, is a
              testament to our collective efforts and dedication.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

/**
 * Main
 */
const Main = () => {
  return (
    <main>
      <div id="Team" className="container margin-vert--md">
        <div className="row margin-vert--lg text--center">
          <div className="col col--4">
            <a href="/blog/authors/mikhail/">
              <Image src="/img/team/mikhail.png" zoom={false} />
              <h3>Mikhail</h3>
              <p>Founder and Grafana Champion</p>
            </a>
          </div>

          <div className="col col--4">
            <a href="/blog/authors/alex/">
              <Image src="/img/team/alex.png" zoom={false} />
              <h3>Alex</h3>
              <p>Director of Engineering</p>
            </a>
          </div>
          <div className="col col--4">
            <a href="/blog/authors/daria/">
              <Image src="/img/team/daria.png" zoom={false} />
              <h3>Daria</h3>
              <p>Co-Founder and Grafana Champion</p>
            </a>
          </div>
        </div>

        <div className="row margin-vert--lg text--center">
          <div className="col col--4">
            <a href="/blog/authors/vitali/">
              <Image src="/img/team/vitali.png" zoom={false} />
              <h3>Vitali</h3>
              <p>Community Engineer</p>
            </a>
          </div>

          <div className="col col--4">
            <Image src="/img/team/mikhail-ulasevich.png" zoom={false} />
            <h3>Mikhail</h3>
            <p>Senior Engineer</p>
          </div>
        </div>
      </div>

      <div
        id="Why"
        className={clsx(styles.whyBox, "container margin-vert--xl")}
      >
        <div className="row">
          <div className="col col--3">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/team/left.svg"),
                dark: useBaseUrl("/img/team/left.dark.svg"),
              }}
            />
          </div>
          <div className="col col--6 text--center">
            <br />
            <h2 className="hero__title margin-vert--lg">Business Gazette</h2>

            <p className="margin-vert--lg hero__subtitle">
              A lot is happening at Volkov Labs. The easiest way to stay on top
              of the news is to read the{" "}
              <a href="/blog/tags/business-gazette/">Business Gazette</a>.
            </p>
          </div>
          <div className="col col--3">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/team/right.svg"),
                dark: useBaseUrl("/img/team/right.dark.svg"),
              }}
            />
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
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=3103acc1-cdc9-4af8-a87c-b9a5c1eaa54d"
        ></script>
      </Head>
      <Header />
      <Main />
    </Layout>
  );
};

export default Home;
