import React from 'react';
import styles from './movie.scss';

import { Button } from '@components';

const Movie = ({ title, releaseYear, stars, format, onClick }) => (
  <div className={styles['movie']}>
    <div className={styles['movie__title']}>{title}</div>
    <div className={styles['movie__infos']}>
      <div className={styles['movie__actors']}>
        <ul>
          {stars.map((star, starIndex) => (
            <li key={starIndex}>{star}</li>
          ))}
        </ul>
      </div>
      <div className={styles['movie__format']}>Format: {format}</div>
      <div className={styles['movie__year']}>Year: {releaseYear}</div>
    </div>
    <div className={styles['movie__controls']}>
      <Button onClick={onClick}>View</Button>
    </div>
  </div>
);

export default Movie;
