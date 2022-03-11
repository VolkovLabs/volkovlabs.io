import clsx from 'clsx';
import React from 'react';
import { PluginList } from '../constants';
import styles from '../css/styles.module.css';
import { FeatureItem } from '../types';

/**
 * Plugin
 */
export const Plugin = ({
  title,
  subTitle,
  Svg,
  Png,
  description,
}: FeatureItem) => {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img className={styles.featurePng} src={Png} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {subTitle && <h4>{subTitle}</h4>}
        <p>{description}</p>
      </div>
    </div>
  );
};

/**
 * Plugins
 */
export const Plugins = (): JSX.Element => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PluginList.map((props, idx) => (
            <Plugin key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plugins;
