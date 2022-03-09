import clsx from 'clsx';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Plugins } from '../components';
import styles from './styles.module.css';

/**
 * Portfolio
 */
export const Portfolio = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Our Work</h1>
        </div>
      </header>

      <main>
        <Plugins />
      </main>
    </Layout>
  );
};

export default Portfolio;
