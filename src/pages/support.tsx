import clsx from 'clsx';
import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import styles from '../css/index.module.css';
import Image from '../theme/Image';

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
              At Volkov Labs, we offer two tiers of support for maintained
              Grafana Community plugins: Standard (which is free) and Premium.
            </p>

            <p className="hero__subtitle">
              The Premium also includes support for Development plugins.
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
                light: useBaseUrl("/img/support/feature-1.svg"),
                dark: useBaseUrl("/img/support/feature-1.dark.svg"),
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
            <Image src="/img/team/daria.png" zoom={false} lazy={true} />
            <h3>Daria</h3>
            <p>Creative Director</p>
          </div>

          <div className="col col--6">
            <Image src="/img/team/mikhail.png" zoom={false} lazy={true} />
            <h3>Mikhail</h3>
            <p>Founder</p>
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
                light: useBaseUrl("/img/support/left.svg"),
                dark: useBaseUrl("/img/support/left.dark.svg"),
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
                light: useBaseUrl("/img/support/right.svg"),
                dark: useBaseUrl("/img/support/right.dark.svg"),
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
