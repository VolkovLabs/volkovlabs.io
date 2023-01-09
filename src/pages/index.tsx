import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import { Plugins, Projects } from '../components';
import styles from '../css/index.module.css';

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
              Volkov Labs is an agency founded by long-time Grafana contributor
              Mikhail Volkov.
            </p>

            <p className="hero__subtitle">
              We find elegant solutions for non-standard tasks.
            </p>
            <div className="margin-vert--lg">
              <Link
                className={clsx(
                  "button button--primary button--lg",
                  styles.getStarted
                )}
                to={useBaseUrl("/plugins")}
              >
                Documentation&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
          <div className="col col--5">
            <ThemedImage
              className={clsx(styles.heroBannerLogo, "margin-vert--md")}
              sources={{
                light: useBaseUrl("/img/main.svg"),
                dark: useBaseUrl("/img/main.dark.svg"),
              }}
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
      <div id="Plugins" className="container margin-vert--lg padding-vert--lg">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>Grafana Plugins</span>
        </h2>

        <div className="container margin-vert--lg padding-vert--lg">
          <Plugins />
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--1">
            <h2 className={clsx(styles.header, "hero__title")}></h2>
          </div>
          <div className="col col--9 hero__subtitle">
            Our Grafana plugins are open source and we update them constantly.
            <br />
            <a href="https://github.com/sponsors/VolkovLabs" target="_blank">
              Become our sponsor on GitHub
            </a>
            .
          </div>
        </div>
      </div>

      <div id="Projects" className="container margin-vert--lg">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>Projects</span>
        </h2>

        <div className="container margin-vert--lg padding-vert--lg">
          <Projects />
        </div>
      </div>

      <div id="Team" className="container margin-vert--md">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>Team</span>
        </h2>

        <div className="row margin-vert--xl padding-horiz--lg">
          <div className="col col--6 avatar">
            <img
              className="avatar__photo avatar__photo--xl"
              src="/img/peoples/daria.png"
            />
            <div className="avatar__intro padding-vert--md">
              <div className="avatar__name">Daria Volkova</div>
              <p className="avatar__subtitle">
                Daria translates ideas to elegant solutions and produces YouTube
                tutorials.
              </p>
            </div>
          </div>

          <div className="col col--6 avatar">
            <img
              className="avatar__photo avatar__photo--xl"
              src="/img/peoples/mikhail.png"
            />
            <div className="avatar__intro padding-vert--md">
              <div className="avatar__name">Mikhail Volkov</div>
              <p className="avatar__subtitle">
                Mikhail loves to work on innovative projects.
              </p>
            </div>
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
                light: useBaseUrl("/img/why-1.svg"),
                dark: useBaseUrl("/img/why-1.dark.svg"),
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
                light: useBaseUrl("/img/why-2.svg"),
                dark: useBaseUrl("/img/why-2.dark.svg"),
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
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Header siteConfig={siteConfig}></Header>
      <Main siteConfig={siteConfig}></Main>
    </Layout>
  );
};

export default Home;
