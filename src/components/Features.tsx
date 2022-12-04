import clsx from 'clsx';
import React from 'react';
import { FeatureList } from '../constants';
import styles from '../css/index.module.css';
import { FeatureItem } from '../types';

/**
 * Feature
 */
export const Feature = ({ Svg, description }: FeatureItem) => {
  return (
    <div className="col margin-vert--lg margin-horiz--lg">
      <div>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div>
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
    <section>
      <div className="container text--center">
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
