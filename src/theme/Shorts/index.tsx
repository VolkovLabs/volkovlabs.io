import React from "react";
import styles from "./styles.module.css";

/**
 * Properties
 */
type Props = {
  id: string;
  src: string;
  title?: string;
  height: number;
  width: number;
};

/**
 * Shorts Video
 */
const Shorts = ({ id, title, height = 560, width = 315 }: Props) => (
  <figure>
    <iframe
      width={width}
      className={styles.video}
      height={height}
      src={`https://youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>

    {title != null && (
      <figcaption className={styles.caption}>{title}</figcaption>
    )}
  </figure>
);

export default Shorts;
