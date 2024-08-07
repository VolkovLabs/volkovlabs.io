import React from "react";
import Image from "../Image";
import { BlogArchive } from "../../constants";

/**
 * Properties
 */
type Props = {
  id: string;
  width: string;
};

/**
 * Blog Post
 */
const BlogPost = ({ id, width = "75%" }: Props) => {
  const posts = [];

  /**
   * Find post with the specific Id
   */
  BlogArchive?.archive?.blogPosts.filter((post) => {
    if (post.metadata.permalink === `/blog/${id}/`) {
      posts.push(post);
    }
  });

  if (!posts.length) {
    return <></>;
  }

  return (
    <a href={posts[0].metadata.permalink}>
      <Image
        title={`${posts[0].metadata.title}.`}
        src={posts[0].metadata.frontMatter.image}
        zoom={false}
        width={width}
      />
    </a>
  );
};

export default BlogPost;
