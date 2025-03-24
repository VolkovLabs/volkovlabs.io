import React from "react";
import Image from "../Image";
import { BlogArchive } from "../../constants";

/**
 * Props for the BlogPost component
 */
interface Props {
  /**
   * Unique identifier for the blog post, matching the ID in the permalink
   * Example: "grafana-101-what-why-who-6b25f0d0fd11" for /blog/grafana-101-what-why-who-6b25f0d0fd11/
   */
  id: string;

  /**
   * Optional width of the image in CSS units (e.g., "75%", "500px")
   * Defaults to "75%" if not provided
   */
  width?: string;
}

/**
 * BlogPost Component
 * Renders a clickable image that links to a specific blog post based on its ID
 * Fetches post data from BlogArchive and displays its featured image
 * Returns null with a warning if the post isn’t found
 */
const BlogPost: React.FC<Props> = ({ id, width = "75%" }) => {
  // Find the blog post by matching its permalink in the archive
  const post = BlogArchive?.archive?.blogPosts.find(
    (post) => post.metadata.permalink === `/blog/${id}/`
  );

  // Handle case where no post is found, logging a warning for debugging
  if (!post) {
    console.warn(`Blog post with ID "${id}" not found in BlogArchive`);
    return null; // Return null for cleaner rendering when post is missing
  }

  return (
    <a href={post.metadata.permalink}>
      <Image
        title={`${post.metadata.title}`}
        src={post.metadata.frontMatter.image}
        zoom={false}
        width={width}
      />
    </a>
  );
};

export default BlogPost;
