import React from 'react';
import { ProjectList } from '../constants';
import { Plugin } from './Plugins';

/**
 * Projects
 */
export const Projects = (): JSX.Element => {
  return (
    <section>
      <div className="container text--center">
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Plugin key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
