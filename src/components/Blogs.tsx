import clsx from 'clsx';
import React from 'react';
import { BlogPosts } from '../constants';
import BlogPostCard from '../theme/BlogPostCard';

/**
 * Blogs
 */
export const Blogs = (): JSX.Element => {
  const posts = [];
  const random = [];

  /**
   * Choose random to at least 3 posts
   */
  while (posts.length < 6) {
    const idx = Math.floor(Math.random() * BlogPosts.length);
    if (random.includes(idx)) {
      continue;
    }

    posts.push(BlogPosts[idx]);
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div className="col col--4 margin-vert--lg">
              <BlogPostCard key={post.metadata?.permalink} post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
