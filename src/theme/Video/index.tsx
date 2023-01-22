import React from 'react';
import styles from './styles.module.css';

/**
 * Properties
 */
type Props = {
  alt: string;
  height?: number;
  src: string;
  title?: string;
  width?: number;
};

/**
 * Video
 */
const Video = ({ alt, height, src, title, width }: Props) => (
  <figure>
    <iframe
      width="100%"
      className={styles.video}
      height="500"
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
