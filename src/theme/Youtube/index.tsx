import React from "react";
import styles from "./styles.module.css";

/**
 * Props for the Youtube component
 */
interface Props {
  /**
   * The unique YouTube video ID from the video URL
   * Example: "SbjIWnrMIgk" from https://youtube.com/watch?v=SbjIWnrMIgk
   */
  id: string;

  /**
   * Optional title of the video for accessibility (iframe title attribute)
   * and caption display below the video
   */
  title?: string;

  /**
   * Height of the video iframe in pixels
   * Defaults to 378 if not specified
   */
  height?: number;

  /**
   * Width of the video iframe in pixels
   * Defaults to 672 if not specified
   */
  width?: number;

  /**
   * Toggle to apply index page-specific styling
   * Uses videoWrapperIndex class when true, videoWrapper otherwise
   * Defaults to false
   */
  index?: boolean;
}

/**
 * Youtube Component
 * Embeds a YouTube video iframe with optional caption and responsive styling
 */
const Youtube: React.FC<Props> = ({
  id,
  title,
  height = 378,
  width = 672,
  index = false,
}) => {
  // Ensure a valid YouTube ID is provided
  if (!id || typeof id !== "string") {
    console.warn("Youtube component requires a valid 'id' prop");
    return null;
  }

  return (
    <figure>
      <div className={index ? styles.videoWrapperIndex : styles.videoWrapper}>
        <iframe
          width={width}
          height={height}
          className={styles.video}
          src={`https://www.youtube.com/embed/${id}`}
          title={title ?? "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {title && <figcaption className={styles.caption}>{title}</figcaption>}
    </figure>
  );
};

export default Youtube;
