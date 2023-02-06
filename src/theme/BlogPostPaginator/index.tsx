import React from 'react';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import { BlogPosts } from '../../constants/blogPosts';
import BlogPostCard from '../BlogPostCard';
import styles from './styles.module.css';

/**
 * Related posts as Paginator
 */
const BlogPostPaginator = (props) => {
  const post = useBlogPost();
  const postTag = post.metadata.tags ? post.metadata.tags[0] : "";

  /**
   * Add posts with the same tags
   */
  const posts = BlogPosts.filter(
    (post) =>
      post.metadata.tags.filter((tag) => tag.label == postTag.label).length > 0
  ).splice(0, 3);

  /**
   * Choose random to at least 3 posts
   */
  while (posts.length < 3) {
    posts.push(BlogPosts[Math.floor(Math.random() * BlogPosts.length)]);
  }

  return (
    <div className={styles.root}>
      <hr />
      <h1>Related posts</h1>

      <div className={styles.posts}>
        {posts.map((post) => (
          <BlogPostCard
            key={post.metadata?.permalink}
            post={post}
            size={"small"}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostPaginator;
