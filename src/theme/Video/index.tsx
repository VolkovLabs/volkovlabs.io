import React from "react";
import styles from "./styles.module.css";

/**
 * Properties
 */
type Props = {
  src: string;
  title?: string;
  height: number;
};

/**
 * Video
 */
const Video = ({ src, title, height = 500 }: Props) => (
  <figure>
    <iframe
      width="100%"
      className={styles.video}
      height={height}
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>

    {title != null && (
      <figcaption className={styles.caption}>{title}</figcaption>
    )}
  </figure>
);

export default Video;
