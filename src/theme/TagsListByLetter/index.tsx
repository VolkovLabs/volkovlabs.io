import React from "react";
import Head from "@docusaurus/Head";
import { listTagsByLetters } from "@docusaurus/theme-common";
import { Chip } from "../Chip";
import styles from "./styles.module.css";

/**
 * Tags List
 */
const TagsListByLetter = ({ tags }) => {
  const letterList = listTagsByLetters(tags);

  return (
    <section className="margin-vert--lg">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      {letterList.map((letterEntry) => (
        <article key={letterEntry.letter}>
          <h2>{letterEntry.letter}</h2>

          {letterEntry.tags.map((tag) => (
            <Chip
              key={tag.permalink}
              className={styles.tag}
              label={`${tag.label} (${tag.count})`}
              permalink={tag.permalink}
              skin="primary"
            />
          ))}
          <hr />
        </article>
      ))}
    </section>
  );
};

export default TagsListByLetter;
