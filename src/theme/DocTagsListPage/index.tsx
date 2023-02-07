import clsx from 'clsx';
import React from 'react';
import { HtmlClassNameProvider, PageMetadata, ThemeClassNames, translateTagsPageTitle } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';
import TagsListByLetter from '@theme/TagsListByLetter';

/**
 * All Tags Page
 */
const DocTagsListPage = ({ tags }) => {
  const title = translateTagsPageTitle();

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsTagsListPage
      )}
    >
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tags_list" />
      <Layout>
        <div className="container margin-vert--lg">
          <div className="row">
            <main className="col col--12">
              <h1>{title}</h1>
              <TagsListByLetter tags={tags} />
            </main>
          </div>
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
};

export default DocTagsListPage;
