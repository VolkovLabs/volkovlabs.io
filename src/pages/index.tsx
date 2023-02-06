import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import { Plugins, Projects } from '../components';
import Blogs from '../components/Blogs';
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
                light: useBaseUrl("/img/index/main.svg"),
                dark: useBaseUrl("/img/index/main.dark.svg"),
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
      <div id="Plugins" className="container margin-vert--md padding-vert--lg">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>Grafana Plugins</span>
        </h2>

        <div className="container margin-vert--md padding-vert--lg">
          <Plugins />
        </div>

        <div className="row margin-vert--md">
          <div className="col col--1">
            <h2 className={clsx(styles.header, "hero__title")}></h2>
          </div>
          <div className="col col--11 hero__subtitle">
            Our Grafana plugins are open source and we update them constantly.
            <br />
            <a href="https://github.com/sponsors/VolkovLabs" target="_blank">
              Become our sponsor on GitHub
            </a>
            .
          </div>
        </div>
      </div>

      <div id="Blogs" className="container margin-vert--md padding-vert--lg">
        <h2 className={clsx(styles.header, "hero__title")}>
          <span>Blog Posts</span>
        </h2>

        <div className="container margin-vert--md padding-vert--lg">
          <Blogs />
        </div>
      </div>

      <div id="Projects" className="container margin-vert--md">
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

        <div className="row margin-vert--lg padding-horiz--lg">
          <div className="col col--4 text--center">
            <Image src="/img/team/daria.png" zoom={false} />
            <h3>Daria</h3>
            <p>
              Translates ideas to elegant solutions and produces YouTube
              tutorials.
            </p>
          </div>

          <div className="col col--4 text--center">
            <Image src="/img/team/mikhail.png" zoom={false} />
            <h3>Mikhail</h3>
            <p>Loves to work on innovative projects.</p>
          </div>

          <div className="col col--4 text--center">
            <Image src="/img/team/ralph.png" zoom={false} />
            <h3>Ralph</h3>
            <p>Helps Daria with YouTube production.</p>
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
                light: useBaseUrl("/img/why/left.svg"),
                dark: useBaseUrl("/img/why/left.dark.svg"),
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
                light: useBaseUrl("/img/why/right.svg"),
                dark: useBaseUrl("/img/why/right.dark.svg"),
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
