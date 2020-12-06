import React from 'react';
import { Row, Column, MovieListItem } from '@components';

import styles from './movie-list.scss';

const MovieList = ({ movies }) => (
  <div className={styles['movie-list']}>
    <Row spacing="s">
      {movies.map(movie => (
        <Column key={movie['_id']} grow>
          <MovieListItem title={movie.title} id={movie['_id']} />
        </Column>
      ))}
    </Row>
  </div>
);

export default MovieList;
