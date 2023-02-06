import clsx from 'clsx';
import React from 'react';
import { BlogPosts } from '../constants';
import styles from '../css/index.module.css';
import BlogPostCard from '../theme/BlogPostCard';

/**
 * Blogs
 */
export const Blogs = (): JSX.Element => {
  const posts = [];

  /**
   * Choose random to at least 3 posts
   */
  while (posts.length < 3) {
    posts.push(BlogPosts[Math.floor(Math.random() * BlogPosts.length)]);
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div className="col col--4">
              <BlogPostCard key={post.metadata?.permalink} post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
