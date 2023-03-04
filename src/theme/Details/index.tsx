import clsx from 'clsx';
import React from 'react';
import { Details as DetailsGeneric } from '@docusaurus/theme-common/Details';
import styles from './styles.module.css';

/**
 * Summary Details
 */
const Details = ({ ...props }) => {
  return (
    <DetailsGeneric
      {...props}
      className={clsx("alert", styles.details, props.className)}
    />
  );
};

export default Details;
