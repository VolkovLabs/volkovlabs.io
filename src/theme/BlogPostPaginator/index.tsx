import React from "react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostCard from "../BlogPostCard";
import styles from "./styles.module.css";

/**
 * Related posts as Paginator
 */
const BlogPostPaginator = (props) => {
  const post = useBlogPost();
  const posts = [];
  const recentBlogPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json");

  /**
   * Add posts with the same tags
   */
  post.metadata.tags.forEach((postTag) =>
    recentBlogPosts?.blogPosts.filter((related) => {
      if (related.metadata.permalink === post.metadata.permalink) {
        return;
      }

      const tags = related.metadata.tags.filter(
        (tag) => tag.label === postTag.label
      );

      if (tags.length) {
        posts.push(related);
      }
    })
  );

  if (!posts.length) {
    return <></>;
  }

  return (
    <div className={styles.root}>
      <hr />
      <h2>Related posts</h2>

      <div className={styles.posts}>
        {posts.slice(0, 3).map((related) => (
          <BlogPostCard key={related.id} post={related} size={"small"} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostPaginator;
