import React from "react";
import BlogPostCard from "../theme/BlogPostCard";

/**
 * Blogs
 */
export const Blogs = (): JSX.Element => {
  const recentBlogPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json");

  return (
    <section>
      <div className="container">
        <div className="row">
          {recentBlogPosts?.blogPosts.slice(0, 9).map((post) => (
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
