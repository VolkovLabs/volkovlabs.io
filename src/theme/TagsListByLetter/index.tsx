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
            <span className={styles.tag}>
              <Chip
                label={`${tag.label} (${tag.count})`}
                permalink={tag.permalink}
                skin="primary"
              />
            </span>
          ))}
          <hr />
        </article>
      ))}
    </section>
  );
};

export default TagsListByLetter;
