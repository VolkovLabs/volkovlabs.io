import clsx from 'clsx';
import React from 'react';
import { PluginList } from '../constants';
import styles from '../css/index.module.css';
import { PluginItem } from '../types';

/**
 * Plugin
 */
export const Plugin = ({
  title,
  subTitle,
  Svg,
  badge,
  badge2,
  href,
  target,
  trade,
  description,
}: PluginItem) => {
  return (
    <div
      className={clsx(
        "col padding-horiz--lg margin-vert--lg margin-horiz--lg",
        styles.featureItem
      )}
    >
      <a href={href} target={target}>
        <div>
          <Svg className={styles.pluginSvg} role="img" />
        </div>
        <div>
          <h3>
            {title}
            {trade && "™"}
          </h3>
          {subTitle && <h4>{subTitle}</h4>}
          <p>{description}</p>
          <p>
            {badge && <img className={styles.badge} src={badge} />}
            {badge && badge2 && <br />}
            {badge2 && <img className={styles.badge} src={badge2} />}
          </p>
        </div>
      </a>
    </div>
  );
};

/**
 * Plugins
 */
export const Plugins = (): JSX.Element => {
  return (
    <section>
      <div className="container text--center">
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
