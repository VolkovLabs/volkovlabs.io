import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import type { Props } from "@theme/NotFound/Content";
import Heading from "@theme/Heading";
import BlogPostItems from "../../BlogPostItems";
import { BlogArchive } from "../../../constants";

/**
 * Not Found
 */
const NotFoundContent = ({ className }: Props): JSX.Element => {
  const items = BlogArchive?.archive?.blogPosts.slice(0, 6).map((post) => {
    return {
      content: post,
    };
  });

  return (
    <main className={clsx("container margin-vert--xl", className)}>
      <div className="row">
        <div className="col col--12">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page"
            >
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page"
            >
              We could not find what you were looking for.
            </Translate>
          </p>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page"
            >
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </Translate>
          </p>

          <BlogPostItems items={items} />
        </div>
      </div>
    </main>
  );
};

export default NotFoundContent;
