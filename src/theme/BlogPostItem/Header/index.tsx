import React from 'react';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';

/**
 * Blog Item Header
 */
const BlogPostItemHeader = () => {
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
      <div className="margin-vert--lg" />
    </header>
  );
};

export default BlogPostItemHeader;
