import React from 'react';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import BlogPostCard from '../BlogPostCard';
import styles from './styles.module.css';

/**
 * Blog Posts
 */
const BlogPostItems = ({ items }) => {
  return (
    <div className={styles.root}>
      <h2>Blog Posts</h2>

      <div className={styles.posts}>
        {items.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <BlogPostCard post={BlogPostContent} />
          </BlogPostProvider>
        ))}
      </div>
    </div>
  );
};

export default BlogPostItems;
