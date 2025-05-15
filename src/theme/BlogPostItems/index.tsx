import React from "react";
import Head from "@docusaurus/Head";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostCard from "../BlogPostCard";
import styles from "./styles.module.css";

/**
 * Hero Component
 */
const Hero = () => (
  <header className="hero hero--primary">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="hero__title margin-bottom--md">
            Data Visualization & Grafana Insights
          </h1>
          <p className="hero__subtitle margin-vert--md">
            Explore the Volkov Labs Blog for expert insights, tutorials, and
            updates on data visualization, Grafana plugins, and open-source
            solutions. Stay informed with our latest tips and innovations.
          </p>
        </div>
      </div>
    </div>
  </header>
);

/**
 * Header
 */
const Header = ({ items }) => {
  /**
   * Tags not to index
   */
  if (items.length < 100) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
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
      <Hero />
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
