import clsx from "clsx";
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { CoreList, InsightList } from "../constants";
import styles from "../css/index.module.css";
import { PluginItem } from "../types";

/**
 * Plugin
 */
export const Plugin = ({
  title,
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
          height="120px"
          sources={{
            light: useBaseUrl(`/img/plugins/${name}/logo.svg`),
            dark: useBaseUrl(`/img/plugins/${name}/logo.dark.svg`),
          }}
        />
        <div>
          <h3>{title}</h3>
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
 * Core Plugins
 */
export const CorePlugins = (): JSX.Element => {
  return (
    <section>
      <div className="container text--center">
        <div className="row">
          {CoreList.map((props, idx) => (
            <Plugin key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Core Plugins
 */
export const InsightPlugins = (): JSX.Element => {
  return (
    <section>
      <div className="container text--center">
        <div className="row">
          {InsightList.map((props, idx) => (
            <Plugin key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
