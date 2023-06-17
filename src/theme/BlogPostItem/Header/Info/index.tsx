import clsx from "clsx";
import React from "react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import i18n from "@generated/i18n";
import styles from "./styles.module.css";

/**
 * Format updated date
 */
const UpdatedDate = ({ updated }) => {
  if (!updated) {
    return;
  }

  const date = new Date(updated);
  try {
    const formatted = new Intl.DateTimeFormat(i18n.currentLocale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
      calendar: i18n.localeConfigs[i18n.currentLocale]!.calendar,
    }).format(date);

    return <> · Updated on {formatted}</>;
  } catch {}

  return <>Invalid date</>;
};

/**
 * Header information for Blog Post
 */
const BlogPostItemHeaderInfo = ({ className }) => {
  const { metadata } = useBlogPost();
  const { date, formattedDate, frontMatter } = metadata;

  return (
    <div className={clsx(styles.container, "margin-vert--md", className)}>
      <time dateTime={date} itemProp="datePublished">
        {formattedDate}
      </time>
      {frontMatter.updated && <UpdatedDate updated={frontMatter.updated} />}
    </div>
  );
};

export default BlogPostItemHeaderInfo;
