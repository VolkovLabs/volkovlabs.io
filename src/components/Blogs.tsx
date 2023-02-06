import clsx from 'clsx';
import React from 'react';
import { BlogPosts } from '../constants';
import BlogPostCard from '../theme/BlogPostCard';

/**
 * Blogs
 */
export const Blogs = (): JSX.Element => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {BlogPosts.splice(0, 3).map((post) => (
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
