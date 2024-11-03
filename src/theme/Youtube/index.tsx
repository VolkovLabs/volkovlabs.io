import React from "react";
import styles from "./styles.module.css";

/**
 * Properties
 */
type Props = {
  id: string;
  title?: string;
  height: number;
  width: number;
  index: boolean;
};

/**
 * YouTube
 */
const Youtube = ({
  id,
  title,
  height = 378,
  width = 672,
  index = false,
}: Props) => (
  <figure>
    <div className={index ? styles.videoWrapperIndex : styles.videoWrapper}>
      <iframe
        width={width}
        className={styles.video}
        height={height}
        src={`https://youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {title != null && (
      <figcaption className={styles.caption}>{title}</figcaption>
    )}
  </figure>
);

export default Youtube;
