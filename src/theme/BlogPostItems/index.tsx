import React from 'react';
import Link from '@docusaurus/Link';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import { Chip } from '../Chip';
import styles from './styles.module.css';

const BlogPostItems = ({ items }) => {
  return (
    <div className={styles.posts}>
      {items.map(({ content: BlogPostContent }) => {
        const { permalink, title, formattedDate, frontMatter, tags, authors } =
          BlogPostContent.metadata;
        const author = authors[0];
        const tag = tags[0];

        return (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <div className={styles.post}>
              <div className={styles.imageBox}>
                <Link to={permalink} className={styles.image}>
                  <img loading="lazy" src={frontMatter.image} alt={title} />
                </Link>
              </div>

              <div className={styles.content}>
                <div className={styles.tags}>
                  <Chip
                    label={tag.label}
                    permalink={tag.permalink}
                    skin="secondary"
                  />
                </div>

                <h3 className={styles.title}>
                  <Link to={permalink}>{title}</Link>
                </h3>

                <div className={styles.author}>
                  by <Link to={author.url}>{author.name}</Link> on{" "}
                  {formattedDate}
                </div>
              </div>
            </div>
          </BlogPostProvider>
        );
      })}
    </div>
  );
};

export default BlogPostItems;
