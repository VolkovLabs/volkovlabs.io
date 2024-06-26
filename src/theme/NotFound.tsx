import React from "react";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import BlogPostItems from "./BlogPostItems";
import { BlogArchive } from "../constants";

/**
 * Not Found
 */
const NotFound = () => {
  const items = BlogArchive?.archive?.blogPosts.slice(0, 6).map((post) => {
    return {
      content: post,
    };
  });

  return (
    <>
      <PageMetadata title="Page Not Found" />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--12">
              <h1 className="hero__title">Page Not Found</h1>
              <p>We could not find what you were looking for.</p>
              <p>
                Please contact the owner of the site that linked you to the
                original URL and let them know their link is broken.
              </p>

              <BlogPostItems items={items} />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default NotFound;
