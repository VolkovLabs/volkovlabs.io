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
          {!toc && (
            <main
              className="col col--12"
              itemScope
              itemType="http://schema.org/Blog"
            >
              {children}
            </main>
          )}
          {toc && (
            <>
              <main
                className="col col--10"
                itemScope
                itemType="http://schema.org/Blog"
              >
                {children}
              </main>
              <div className="col col--2">{toc}</div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogLayout;
