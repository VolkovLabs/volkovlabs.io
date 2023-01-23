import React from 'react';
import Link from '@docusaurus/Link';
import { Chip } from '../Chip';
import styles from './styles.module.css';

/**
 * Blog Card
 */
const BlogPostCard = ({ post }) => {
  const { permalink, title, formattedDate, frontMatter, tags, authors } =
    post.metadata;
  const author = authors[0];
  const tag = tags[0];

  return (
    <div className={styles.post}>
      <div className={styles.imageBox}>
        <Link to={permalink} className={styles.image}>
          <img src={frontMatter.image} alt={title} />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.tags}>
          <Chip label={tag.label} permalink={tag.permalink} skin="secondary" />
        </div>

        <h3 className={styles.title}>
          <Link to={permalink}>{title}</Link>
        </h3>

        <div className={styles.author}>
          by <b>{author.name}</b> on {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
