import clsx from "clsx";
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { PluginList } from "../constants";
import styles from "../css/index.module.css";
import { PluginItem } from "../types";

/**
 * Plugin
 */
export const Plugin = ({
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
    <div className={clsx("col col--6", styles.featureItem)}>
      <a href={href} target={target}>
        <ThemedImage
          role="img"
          class={styles.plugin}
          sources={{
            light: useBaseUrl(`/img/plugins/${name}/plugin.png`),
            dark: useBaseUrl(`/img/plugins/${name}/plugin.dark.png`),
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
