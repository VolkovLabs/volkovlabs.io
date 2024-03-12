import React from "react";
import styles from "./styles.module.css";

/**
 * Properties
 */
type Props = {
  src: string;
  title?: string;
  height: number;
  width: number;
};

/**
 * Video
 */
const Video = ({ src, title, height = 378, width = 672 }: Props) => (
  <figure>
    <div className={styles.videoWrapper}>
      <iframe
        width={width}
        className={styles.video}
        height={height}
        src={src}
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

export default Video;
