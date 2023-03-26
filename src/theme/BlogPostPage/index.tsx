import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BlogPostPage from "@theme-original/BlogPostPage";

/**
 * Blog Post
 */
const BlogPostPageWrapper = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const blogMetaData = props.content.metadata;

  // https://developers.google.com/search/docs/appearance/structured-data/breadcrumb#json-ld
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: "Blog Archive breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog Archive",
        item: `${siteConfig.url}/blog/archive`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blogMetaData.title,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      <BlogPostPage {...props} />
    </>
  );
};

export default BlogPostPageWrapper;
