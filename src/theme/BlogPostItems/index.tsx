import React from "react";
import Head from "@docusaurus/Head";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import BlogPostCard from "../BlogPostCard";
import styles from "./styles.module.css";

/**
 * Header
 */
const Header = ({ items }) => {
  /**
   * Tags not to index
   */
  if (items.length < 20) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <h2>Blog Posts</h2>
      </>
    );
  }

  /**
   * Blog list
   */
  return (
    <>
      <Head>
        <meta property="og:image" content="/img/honeycomb.png" />
      </Head>
      <h1>Blog Posts</h1>
    </>
  );
};

/**
 * Blog Posts
 */
const BlogPostItems = ({ items }) => {
  return (
    <div className={styles.root}>
      <Header items={items} />

      <div className={styles.posts}>
        {items.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <BlogPostCard post={BlogPostContent} />
          </BlogPostProvider>
        ))}
      </div>
    </div>
  );
};

export default BlogPostItems;
