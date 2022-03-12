import clsx from 'clsx';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Plugins } from '../components';
import styles from '../css/index.module.css';

/**
 * Portfolio
 */
export const Portfolio = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.sectionDarkTitle)}>
            Our Work
          </h1>
          <p className={clsx("hero__subtitle", styles.sectionDarkTitle)}>
            We are proud of how fast we can deliver working solutions. Our
            meetings are straight to the point. You save time and money while
            getting what you need.
          </p>
        </div>
      </header>

      <main>
        <Plugins />

        <div className={styles.sectionDarkLight}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="margin-vert--lg text--center">
                  <h2 className={styles.sectionDarkTitle}>
                    "Volkov Labs' custom plugin development service is amazing.
                    It is a rocket ship for transitioning an idea to reality."
                  </h2>

                  <p className={styles.sectionDarkTitle}>
                    Christopher Field, President, Theia Scientific
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Portfolio;
