import React from "react";
import { Chip } from "../Chip";
import styles from "./styles.module.css";

/**
 * Display Tags for Blog and Documentation
 */
const TagsListInline = ({ tags }) => {
  return (
    <ul className={styles.tags}>
      {tags.map(({ label, permalink }) => (
        <li key={permalink} className={styles.tag}>
          <Chip label={label} permalink={permalink} skin="primary" />
        </li>
      ))}
    </ul>
  );
};

export default TagsListInline;
