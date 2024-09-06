import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import styles from "../css/index.module.css";
import Image from "../theme/Image";

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
              Volkov Labs is a family-owned business based in Tampa, Florida
              dedicated to creating innovative open-source plugins for Grafana.
            </p>

            <p className="hero__subtitle">
              Our plugins have been downloaded more than 23 million times and
              have received praise from hundreds of users who are thrilled with
              its ability to go beyond observability and solve complex business
              tasks.
            </p>
          </div>

          <div className="col col--5 text--center">
            <ThemedImage
              className={clsx("margin-vert--md")}
              sources={{
                light: useBaseUrl("/img/team/feature-1.svg"),
                dark: useBaseUrl("/img/team/feature-1.dark.svg"),
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
      <div id="Team" className="container margin-vert--md">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>Team</span>
        </h2>

        <div className="row margin-vert--lg text--center">
          <div className="col col--6">
            <Image src="/img/team/mikhail.png" zoom={false} />
            <h3>Mikhail</h3>
            <p>Founder, CEO and Grafana Champion</p>
          </div>

          <div className="col col--6">
            <Image src="/img/team/alex.png" zoom={false} />
            <h3>Alex</h3>
            <p>Director of Engineering</p>
          </div>
        </div>

        <div className="row margin-vert--lg text--center">
          <div className="col col--6">
            <Image src="/img/team/daria.png" zoom={false} />
            <h3>Daria</h3>
            <p>Creative Director, COO and Grafana Champion</p>
          </div>

          <div className="col col--6">
            <Image src="/img/team/vitali.png" zoom={false} />
            <h3>Vitali</h3>
            <p>Community Engineer</p>
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
            <h2 className="hero__title margin-vert--lg">Business Suite</h2>

            <p className="margin-vert--lg hero__subtitle">
              The <a href="/plugins/">Business Suite for Grafana</a> is a
              collection of open source plugins created and actively maintained
              by Volkov Labs.
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
      </Head>
      <Header siteConfig={siteConfig}></Header>
      <Main siteConfig={siteConfig}></Main>
    </Layout>
  );
};

export default Home;
