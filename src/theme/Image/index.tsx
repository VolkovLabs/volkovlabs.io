import "react-medium-image-zoom/dist/styles.css";
import { clsx } from "clsx";
import React from "react";
import Zoom from "react-medium-image-zoom";
import styles from "./styles.module.css";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {}
}
/**
 * Properties
 */
type Props = {
  height?: number;
  src: string;
  title?: string;
  width?: string;
  zoom?: boolean;
  lazy?: boolean;
};

/**
 * Image
 */
const Image = ({
  height,
  src,
  title,
  width,
  zoom = true,
  lazy = true,
}: Props) => (
  <figure>
    {zoom ? (
      <Zoom>
        <img
          loading={lazy ? "lazy" : "eager"}
          alt={title}
          className={styles.image}
          height={height ? height : "auto"}
          src={src}
          width={width}
        />
      </Zoom>
    ) : (
      <img
        loading={lazy ? "lazy" : "eager"}
        alt={title}
        className={clsx(styles.image, styles.blog)}
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
