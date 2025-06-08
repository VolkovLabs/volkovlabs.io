import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type Skin = "primary" | "secondary";
type Size = "small" | "medium" | "large";

/**
 * Properties
 */
type Props = {
  label: string;
  permalink: string;
  className?: string;
  skin?: Skin;
  size?: Size;
  active?: boolean;
};

/**
 * Skins
 */
const skins: { [key in Skin]: string } = {
  primary: styles.skinPrimary,
  secondary: styles.skinSecondary,
};

/**
 * Sizes
 */
const sizes: { [key in Size]: string } = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
};

/**
 * Display a Tag for Blog and Documentation
 */
export const Chip = ({
  label,
  permalink,
  className,
  skin = "primary",
  size = "small",
  active,
}: Props) => (
  <a
    className={clsx(styles.root, className, skins[skin], sizes[size], {
      [styles.active]: active,
    })}
    href={permalink}
  >
    {label}
  </a>
);
