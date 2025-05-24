import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

/**
 * Properties
 */
type Props = {
  doc: any;
};

/**
 * Doc Card
 */
const DocCard = ({ doc }: Props) => {
  const { permalink, title, description } = doc;

  return (
    <div className={styles.post}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link to={permalink}>{title}</Link>
        </h3>
        {description && <div className={styles.description}>{description}</div>}
      </div>
    </div>
  );
};

export default DocCard;
