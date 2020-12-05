import React, { useEffect, useState } from 'react';
import { Movie, Row, Column, Container} from '@components';

import styles from './movies.scss';

const Movies = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const [loadingState, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState('pending');
    fetch('/api/movies')
      .then(r => r.json())
      .then(r => {
        setMovies(r);
        setLoadingState('success');
      });
  }, []);

  return (
    <div className={styles['movies']}>
      <Container>
        {(loadingState === 'success') && (
          <Row spacing="m">
            {movies.map(movie => (
              <Column p="1" t="3" d="4" key={movie['_id']}>
                <div className={styles['movies__item']}>
                  <Movie
                    title={movie.title}
                    stars={movie.stars}
                    format={movie.format}
                    releaseYear={movie.releaseYear}
                    onClick={onMovieClick}
                  />
                </div>
              </Column>
            ))}
          </Row>
        )}
        {loadingState === 'pending' && (
          <p>loading</p>
        )}
      </Container>
    </div>
  );
};

export default Movies;
