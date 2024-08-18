import React from "react";
import Layout from "@theme/Layout";

/**
 * Main with or without TOC
 */
const Main = ({ children, toc }) => {
  if (!toc) {
    return (
      <main className="col col--12" itemScope itemType="http://schema.org/Blog">
        {children}
      </main>
    );
  }

  return (
    <>
      <main className="col col--10" itemScope itemType="http://schema.org/Blog">
        {children}
      </main>
      <div className="col col--2">{toc}</div>
    </>
  );
};

/**
 * Blog Layout
 */
const BlogLayout = (props) => {
  const { toc, children, ...layoutProps } = props;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <Main children={children} toc={toc} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogLayout;
