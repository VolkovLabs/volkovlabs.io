import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Features, Plugins, Projects } from '../components';
import styles from '../css/index.module.css';

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--7 margin-vert--lg">
              <h1 className="hero__title margin-vert--lg">
                {siteConfig.tagline}
              </h1>

              <p className="hero__subtitle margin-vert--md">
                Volkov Labs is an agency founded by long-time Grafana
                contributor Mikhail Volkov.
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
              <img
                className={clsx(styles.heroBannerLogo, "margin-vert--md")}
                src={useBaseUrl("img/main.svg")}
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div
          id="OpenSource"
          className="container margin-vert--lg padding-vert--lg"
        >
          <h2 className={clsx(styles.header, "hero__title")}>
            <span>Open Source</span>
          </h2>

          <Plugins />

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

          <Projects />
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
                  Daria translates ideas to elegant solutions and produce
                  YouTube tutorials.
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
              <img src={useBaseUrl("img/why-1.svg")} />
            </div>
            <div className="col col--6 text--center">
              <br />
              <h2 className="hero__title margin-vert--lg">Why work with us</h2>

              <p className="margin-vert--lg hero__subtitle">
                "Volkov Labs' custom plugin development service is amazing.{" "}
                <br /> It is a rocket ship for transitioning an idea to
                reality."
              </p>

              <p className="margin-vert--md">
                Christopher Field, President, Theia Scientific
              </p>
            </div>
            <div className="col col--3">
              <img src={useBaseUrl("img/why-2.svg")} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
