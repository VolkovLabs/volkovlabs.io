import clsx from 'clsx';
import React from 'react';
import { PeopleList } from '../../constants';
import { FeatureItem } from '../../types';
import styles from '../styles.module.css';

/**
 * Person
 */
export const Person = ({ title, subTitle, Png, description }: FeatureItem) => {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <img className={styles.featurePng} src={Png} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

/**
 * Peoples
 */
export const Peoples = (): JSX.Element => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PeopleList.map((props, idx) => (
            <Person key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Peoples;
