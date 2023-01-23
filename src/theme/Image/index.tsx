import React from 'react';
import styles from './styles.module.css';

/**
 * Properties
 */
type Props = {
  height?: number;
  src: string;
  title?: string;
  width?: number;
};

/**
 * Image
 */
const Image = ({ height, src, title, width }: Props) => (
  <figure>
    <img
      alt={title}
      className={styles.image}
      height={height ? height : "auto"}
      src={src}
      width={width}
    />
    {title != null && (
      <figcaption className={styles.caption}>{title}</figcaption>
    )}
  </figure>
);

export default Image;
