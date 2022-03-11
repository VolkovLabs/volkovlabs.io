import clsx from 'clsx';
import React from 'react';
import { FeatureList } from '../constants';
import styles from '../css/styles.module.css';
import { FeatureItem } from '../types';

/**
 * Feature
 */
export const Feature = ({ title, Svg, description }: FeatureItem) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

/**
 * Features
 */
export const Features = (): JSX.Element => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
