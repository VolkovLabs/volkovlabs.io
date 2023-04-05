import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BlogArchivePage from "@theme-original/BlogArchivePage";

/**
 * Blog Archive
 */
const BlogArchivePageWrapper = (props) => {
  const { siteConfig } = useDocusaurusContext();

  // https://developers.google.com/search/docs/appearance/structured-data/breadcrumb#json-ld
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: "Blog breadcrumb",
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
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      <BlogArchivePage {...props} />
    </>
  );
};

export default BlogArchivePageWrapper;
