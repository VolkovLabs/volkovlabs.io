import clsx from 'clsx';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import { PluginList, ProjectList } from '../constants';
import styles from '../css/index.module.css';
import { PluginItem } from '../types';
import { Plugin } from './Plugins';

/**
 * Project
 */
export const Project = ({
  title,
  subTitle,
  name,
  badge,
  badge2,
  href,
  target,
  description,
}: PluginItem) => {
  return (
    <div className={clsx("col col--3", styles.featureItem)}>
      <a href={href} target={target}>
        <ThemedImage
          role="img"
          sources={{
            light: useBaseUrl(`/img/projects/${name}.svg`),
            dark: useBaseUrl(`/img/projects/${name}.dark.svg`),
          }}
        />
        <div>
          <h3>{title}</h3>
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
 * Projects
 */
export const Projects = (): JSX.Element => {
  return (
    <section>
      <div className="container text--center">
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
