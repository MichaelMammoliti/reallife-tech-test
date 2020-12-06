import React from 'react';

import { MoviesContainer } from '@containers';

import styles from './movies.scss';

const Movies = () => (
  <div className={styles['movies']}>
    <MoviesContainer />
  </div>
);

export default Movies;
