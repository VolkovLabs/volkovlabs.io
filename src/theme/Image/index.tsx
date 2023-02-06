import 'react-medium-image-zoom/dist/styles.css';
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import styles from './styles.module.css';

/**
 * Properties
 */
type Props = {
  height?: number;
  src: string;
  title?: string;
  width?: number;
  zoom: boolean;
};

/**
 * Image
 */
const Image = ({ height, src, title, width, zoom = true }: Props) => (
  <figure>
    {zoom && (
      <Zoom>
        <img
          alt={title}
          loading="lazy"
          className={styles.image}
          height={height ? height : "auto"}
          src={src}
          width={width}
        />
      </Zoom>
    )}

    {!zoom && (
      <img
        alt={title}
        loading="lazy"
        className={styles.image}
        height={height ? height : "auto"}
        src={src}
        width={width}
      />
    )}

    {title != null && (
      <figcaption className={styles.caption}>{title}</figcaption>
    )}
  </figure>
);

export default Image;
