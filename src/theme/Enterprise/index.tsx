import React from "react";
import styles from "./styles.module.css";

/**
 * Enterprise Component
 * Renders a styled button linking to the pricing page for Business Suite Enterprise
 * Includes an SVG checkmark icon and text for enrollment
 */
const Enterprise: React.FC = () => (
  <a className={styles.button} href="/pricing">
    <svg
      aria-hidden="true"
      viewBox="0 0 78.369 78.369"
      version="1.1"
      height="16"
      width="16"
      data-view-component="true"
      className={styles.buttonSvg2}
    >
      <path
        d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
        c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
        C78.477,17.894,78.477,18.586,78.049,19.015z"
      />
    </svg>
    &nbsp; Enroll in Business Suite Enterprise
  </a>
);

export default Enterprise;
