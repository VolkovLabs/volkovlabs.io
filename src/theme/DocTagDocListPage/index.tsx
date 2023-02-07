import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import { HtmlClassNameProvider, PageMetadata, ThemeClassNames, usePluralForm } from '@docusaurus/theme-common';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';
import DocCard from '../DocCard';
import styles from './styles.module.css';

// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
  const { selectMessage } = usePluralForm();

  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: "theme.docs.tagDocListPageTitle.nDocsTagged",
          description:
            'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One doc tagged|{count} docs tagged",
        },
        { count }
      )
    );
}

/**
 * Documents tagged page
 */
const DocTagDocListPage = ({ tag }) => {
  const nDocsTaggedPlural = useNDocsTaggedPlural();

  const title = translate(
    {
      id: "theme.docs.tagDocListPageTitle",
      description: "The title of the page for a docs tag",
      message: '{nDocsTagged} with "{tagName}"',
    },
    { nDocsTagged: nDocsTaggedPlural(tag.count), tagName: tag.label }
  );

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsTagDocListPage
      )}
    >
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tag_doc_list" />

      <Layout>
        <div className="container margin-vert--lg">
          <div className="row">
            <main className="col col--12">
              <header className="margin-bottom--xl">
                <h1>{title}</h1>
                <Link href={tag.allTagsPath}>
                  <Translate
                    id="theme.tags.tagsPageLink"
                    description="The label of the link targeting the tag list page"
                  >
                    View All Tags
                  </Translate>
                </Link>
              </header>

              <div className={styles.root}>
                <h1>Pages</h1>

                <div className={styles.posts}>
                  {tag.items.map((doc) => (
                    <article key={doc.id} className="margin-vert--lg">
                      <DocCard doc={doc} />
                    </article>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
};

export default DocTagDocListPage;
