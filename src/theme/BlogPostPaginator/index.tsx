import React from "react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import { BlogPosts } from "../../constants/blogPosts";
import BlogPostCard from "../BlogPostCard";
import styles from "./styles.module.css";

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
    BlogPosts.filter((related) => {
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
      <h1>Related posts</h1>

      <div className={styles.posts}>
        {posts.slice(0, 3).map((related) => (
          <BlogPostCard key={related.id} post={related} size={"small"} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostPaginator;
