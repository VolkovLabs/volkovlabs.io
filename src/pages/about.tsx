import clsx from 'clsx';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Peoples } from '../components';
import styles from './styles.module.css';

/**
 * About
 */
export const About = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">About Us</h1>
        </div>
      </header>

      <main>
        <Peoples />
      </main>
    </Layout>
  );
};

export default About;
