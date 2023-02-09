import React from "react";
import { BlogPosts } from "../constants";
import BlogPostCard from "../theme/BlogPostCard";

/**
 * Blogs
 */
export const Blogs = (): JSX.Element => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {BlogPosts.slice(0, 6).map((post) => (
            <div className="col col--4 margin-vert--lg">
              <BlogPostCard key={post.id} post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
