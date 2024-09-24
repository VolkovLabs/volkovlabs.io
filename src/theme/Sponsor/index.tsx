import React from "react";
import styles from "./styles.module.css";

/**
 * GitHub Sponsor
 */
const Sponsor = () => (
  <div class="row">
    <div className="col col--6">
      <a
        className={styles.button}
        href="https://github.com/sponsors/VolkovLabs"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          height="16"
          width="16"
          data-view-component="true"
          class={styles.buttonSvg}
        >
          <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
        </svg>
        &nbsp;&nbsp;Become a sponsor
      </a>
    </div>
    <div className="col col--6">
      <a className={styles.button} href="/pricing">
        <svg
          aria-hidden="true"
          viewBox="0 0 78.369 78.369"
          version="1.1"
          height="16"
          width="16"
          data-view-component="true"
          class={styles.buttonSvg2}
        >
          <path
            d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
		c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
		C78.477,17.894,78.477,18.586,78.049,19.015z"
          />
        </svg>
        &nbsp;&nbsp;Enroll in Business Suite Enterprise
      </a>
    </div>
  </div>
);

export default Sponsor;
