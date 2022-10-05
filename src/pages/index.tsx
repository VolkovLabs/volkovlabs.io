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
                  to={useBaseUrl("#OpenSource")}
                >
                  Open Source plugins&nbsp;&nbsp;→
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
        <div id="What" className="container margin-vert--lg padding-vert--lg">
          <h2 className={clsx(styles.header, "hero__title")}>
            <span>What we are doing</span>
          </h2>

          <Features />
        </div>

        <div
          id="Why"
          className={clsx(styles.whyBox, "container margin-vert--lg")}
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

        <div
          id="OpenSource"
          className="container margin-vert--lg padding-vert--xl"
        >
          <h2 className={clsx(styles.header, "hero__title")}>
            <span>Open Source</span>
          </h2>

          <Plugins />

          <div className="row">
            <div className="col col--1">
              <h2 className={clsx(styles.header, "hero__title")}></h2>
            </div>
            <div className="col col--9 hero__subtitle">
              Our Grafana plugins are open source and we update them constantly.
              <br />
              <a href="https://github.com/sponsors/VolkovLabs">
                Become our sponsor on GitHub
              </a>
              .
            </div>
            <div className="col col--2"></div>
          </div>
        </div>

        <div id="Projects" className="container margin-vert--lg">
          <h2 className={clsx(styles.headerWhite, "hero__title")}>
            <span>Projects</span>
          </h2>

          <Projects />

          <iframe
            width="100%"
            height="640"
            src="https://www.youtube.com/embed/zf98C3lux54"
            title="IoT Framework based on balena and Grafana | Open source Grafana plugins"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div id="Team" className="container margin-vert--lg">
          <h2 className={clsx(styles.headerWhite, "hero__title")}>
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
                  Daria translates ideas to elegant solutions and YouTube
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

          <div className="col col--2"></div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
