import React, { type ReactNode } from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import type { Props } from "@theme/BlogPostItem";

const useContainerClassName = () => {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
};

const BlogPostItem = ({ children, className }: Props): ReactNode => {
  const containerClassName = useContainerClassName();

  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <header className="hero hero--primary hero--primary--2rem">
        <BlogPostItemHeader />
      </header>
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
};

export default BlogPostItem;
