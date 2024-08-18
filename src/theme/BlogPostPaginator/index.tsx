import React from "react";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostCard from "../BlogPostCard";
import styles from "./styles.module.css";
import { BlogArchive } from "../../constants";

/**
 * Related posts as Paginator
 */
const BlogPostPaginator = (props) => {
  const post = useBlogPost();
  const posts = [];

  /**
   * Add posts with the same tags
   */
  post.metadata.tags.forEach((postTag) =>
    BlogArchive?.archive?.blogPosts.filter((related) => {
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
