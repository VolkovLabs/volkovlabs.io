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
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
};

export default BlogLayout;
