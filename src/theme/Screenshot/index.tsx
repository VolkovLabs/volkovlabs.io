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
 * Screenshot
 */
const Screenshot = ({ height, src, title, width }: Props) => (
  <figure>
    <img
      alt={title}
      className={styles.image}
      height={height}
      src={src}
      width={width}
    />
    {title != null && (
      <figcaption className={styles.caption}>{title}</figcaption>
    )}
  </figure>
);

export default Screenshot;
