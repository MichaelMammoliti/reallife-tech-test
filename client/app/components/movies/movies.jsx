import React, { useEffect } from 'react';
import { Movie, Row, Column, Container} from '@components';

import data from '../../mocks/data';

import styles from './movies.scss';

const Movies = ({ movies, onMovieClick }) => {
  useEffect(() => {
    fetch('/api/movie')
      .then(r => r.json())
      .then(r => {
        console.log(r);
      })
      .catch(e => console.log(e));
  });

  return (
    <div className={styles['movies']}>
      <Container>
        <Row spacing="m">
          {movies.map((movie, movieIndex) => (
            <Column p="1" t="3" d="4" key={movieIndex}>
              <div key={movie.id} className={styles['movies__item']}>
                <Movie {...movie} onClick={onMovieClick} />
              </div>
            </Column>
          ))}
        </Row>
      </Container>
    </div>
  );
};

Movies.defaultProps = {
  movies: data,
};

export default Movies;
