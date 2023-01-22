import React from 'react';
import Layout from '@theme/Layout';

/**
 * Blog Layout
 */
const BlogLayout = (props) => {
  const { sidebar, toc, children, ...layoutProps } = props;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col" itemScope itemType="http://schema.org/Blog">
            {children}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default BlogLayout;
