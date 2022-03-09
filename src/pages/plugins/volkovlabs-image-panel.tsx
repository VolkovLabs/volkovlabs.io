import clsx from 'clsx';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Features } from '../../components';
import styles from '../styles.module.css';

/**
 * Plugin
 */
export const Plugin = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Base64 Image/PDF panel</h1>
          <p className="hero__subtitle">
            Allows displaying raw and Base64 encoded files in PNG, JPG, GIF, and
            PDF formats.
          </p>
        </div>
      </header>

      <main>
        <Features />
      </main>
    </Layout>
  );
};

export default Plugin;
