import React from "react";
import Link from "@docusaurus/Link";
import { Chip } from "../Chip";
import styles from "./styles.module.css";

type Size = "small" | "medium";

/**
 * Properties
 */
type Props = {
  post: any;
  size?: Size;
};

/**
 * Blog Card
 */
const BlogPostCard = ({ post, size = "medium" }: Props) => {
  const { permalink, title, formattedDate, frontMatter, tags, authors } =
    post.metadata;
  const author = authors ? authors[0] : "";
  const tag = tags ? tags[0] : "";

  return (
    <div className={styles.post}>
      <div
        className={
          size == "medium" ? styles.imageBoxMedium : styles.imageBoxSmall
        }
      >
        <a href={permalink} className={styles.image}>
          <img src={frontMatter.image} alt={title} />
        </a>
      </div>

      <div className={styles.content}>
        <div className={styles.tags}>
          <Chip label={tag.label} permalink={tag.permalink} skin="secondary" />
        </div>

        <h3 className={styles.title}>
          <a href={permalink}>{title}</a>
        </h3>

        {author && formattedDate && size === "medium" && (
          <div className={styles.author}>
            by <b>{author.name}</b> on {formattedDate}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostCard;
