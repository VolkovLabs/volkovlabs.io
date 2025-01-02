import clsx from "clsx";
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { IntelligenceList } from "../constants";
import styles from "../css/index.module.css";
import { PluginItem } from "../types";

/**
 * Component
 */
export const Component = ({
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
    <div className={clsx("col col--4", styles.featureItem)}>
      <a href={href} target={target}>
        <ThemedImage
          role="img"
          height="120px"
          sources={{
            light: useBaseUrl(`/img/big/${name}/logo.svg`),
            dark: useBaseUrl(`/img/big/${name}/logo.dark.svg`),
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
 * Business Intelligence
 */
export const Intelligence = (): JSX.Element => {
  return (
    <section>
      <div className="container text--center">
        <div className="row">
          {IntelligenceList.map((props, idx) => (
            <Component key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intelligence;
