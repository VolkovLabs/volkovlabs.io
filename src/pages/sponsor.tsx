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
              We prioritize issue and question replies for Premium sponsors.
            </p>

            <p className="hero__subtitle">
              Sponsor our open-source Grafana plugins on GitHub Sponsor.
            </p>

            <div className="margin-vert--lg">
              <a
                className={clsx(
                  "button button--primary button--lg",
                  styles.getStarted
                )}
                href="https://github.com/sponsors/VolkovLabs"
              >
                Go Premium &nbsp;&nbsp;→
              </a>
            </div>
          </div>
          <div className="col col--5 text--center">
            <ThemedImage
              className={clsx("margin-vert--md")}
              sources={{
                light: useBaseUrl("/img/sponsor/feature-1.svg"),
                dark: useBaseUrl("/img/sponsor/feature-1.dark.svg"),
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
          <div className="col col--4">
            <Image src="/img/team/mikhail.png" zoom={false} lazy={true} />
            <h3>Mikhail</h3>
            <p>Founder, CEO and Grafana Champion</p>
          </div>

          <div className="col col--4">
            <Image src="/img/team/daria.png" zoom={false} lazy={true} />
            <h3>Daria</h3>
            <p>Creative Director, COO and Grafana Champion</p>
          </div>

          <div className="col col--4">
            <Image src="/img/team/alex.png" zoom={false} lazy={true} />
            <h3>Alex</h3>
            <p>Director of Engineering</p>
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
                light: useBaseUrl("/img/sponsor/left.svg"),
                dark: useBaseUrl("/img/sponsor/left.dark.svg"),
              }}
            />
          </div>
          <div className="col col--6 text--center">
            <br />
            <h2 className="hero__title margin-vert--lg">Why work with us</h2>

            <p className="margin-vert--lg hero__subtitle">
              "Volkov Labs' plugin development service is amazing. <br /> It is
              a rocket ship for transitioning an idea to reality."
            </p>

            <p className="margin-vert--md">
              Christopher Field, President, Theia Scientific
            </p>
          </div>
          <div className="col col--3">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/sponsor/right.svg"),
                dark: useBaseUrl("/img/sponsor/right.dark.svg"),
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
        <meta property="og:image" content="/img/volkovlabs.png" />
      </Head>
      <Header siteConfig={siteConfig}></Header>
      <Main siteConfig={siteConfig}></Main>
    </Layout>
  );
};

export default Home;