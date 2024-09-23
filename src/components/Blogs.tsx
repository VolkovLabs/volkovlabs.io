import React from "react";
import BlogPostCard from "../theme/BlogPostCard";
import { BlogArchive } from "../constants";

/**
 * Blogs
 */
export const Blogs = (): JSX.Element => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {BlogArchive?.archive.blogPosts.slice(0, 6).map((post) => (
            <div className="col col--4 margin-vert--lg" key={post.id}>
              <BlogPostCard key={post.id} post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
