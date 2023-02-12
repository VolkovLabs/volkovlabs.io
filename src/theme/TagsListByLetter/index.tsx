import React from 'react';
import { listTagsByLetters } from '@docusaurus/theme-common';
import { Chip } from '../Chip';
import styles from './styles.module.css';

/**
 * Tags List
 */
const TagsListByLetter = ({ tags }) => {
  const letterList = listTagsByLetters(tags);

  return (
    <section className="margin-vert--lg">
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
