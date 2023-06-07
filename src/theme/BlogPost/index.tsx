import React from "react";
import Image from "../Image";

/**
 * Properties
 */
type Props = {
  href: string;
  src: string;
  title?: string;
  width: string;
};

/**
 * Blog Post
 */
const BlogPost = ({ href, title, src, width = "65%" }: Props) => (
  <a href={href}>
    <Image title={title} src={src} zoom={false} width={width} lazy={true} />
  </a>
);

export default BlogPost;
