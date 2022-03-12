import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from '../css/index.module.css';

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, "margin-vert--md")}
            src={useBaseUrl("img/logo.png")}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("/portfolio")}
            >
              Portfolio&nbsp;&nbsp;→
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.sectionDark}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="margin-vert--lg text--center">
                  <h2 className={styles.sectionDarkTitle}>
                    Volkov Labs specializes in developing custom plugins to
                    visualize your data using Grafana as a Platform. Our
                    solutions are cost-effective, creative, and delivered on
                    time.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className={styles.waves}
              d="M0,96L0,32L84.7,32L84.7,288L169.4,288L169.4,160L254.1,160L254.1,160L338.8,160L338.8,256L423.5,256L423.5,32L508.2,32L508.2,288L592.9,288L592.9,192L677.6,192L677.6,32L762.4,32L762.4,192L847.1,192L847.1,256L931.8,256L931.8,160L1016.5,160L1016.5,128L1101.2,128L1101.2,64L1185.9,64L1185.9,128L1270.6,128L1270.6,0L1355.3,0L1355.3,288L1440,288L1440,0L1355.3,0L1355.3,0L1270.6,0L1270.6,0L1185.9,0L1185.9,0L1101.2,0L1101.2,0L1016.5,0L1016.5,0L931.8,0L931.8,0L847.1,0L847.1,0L762.4,0L762.4,0L677.6,0L677.6,0L592.9,0L592.9,0L508.2,0L508.2,0L423.5,0L423.5,0L338.8,0L338.8,0L254.1,0L254.1,0L169.4,0L169.4,0L84.7,0L84.7,0L0,0L0,0Z"
            ></path>
          </svg>
        </div>

        <p className={clsx("hero", styles.heroBanner)}>
          <div className="container">
            <h2 className="hero__title">Our focus</h2>
            <p className="hero__subtitle">
              Big companies offer one-size fit all applications. We have time to
              understand your existing processes and challenges which allows us
              to come up with solutions to not only satisfy your needs but also
              improve productivity, effectiveness, and performance.
            </p>

            <div className="row">
              <div className="col col--6 avatar avatar--vertical">
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

              <div className="col col--6 avatar avatar--vertical">
                <img
                  className="avatar__photo avatar__photo--xl"
                  src="/img/peoples/daria.png"
                />
                <div className="avatar__intro padding-vert--md">
                  <div className="avatar__name">Daria Volkova</div>
                  <p className="avatar__subtitle">
                    Daria translates ideas to elegant solutions and beautify
                    them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </p>
      </main>
    </Layout>
  );
}

export default Home;
