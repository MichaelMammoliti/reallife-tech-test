import React from 'react';

import { Button } from '@components';

import styles from './movie-info.scss';

const MovieInfo = ({
  title,
  stars,
  format,
  releaseYear,
  onDeleteClick,
}) => (
  <div className={styles['movie-info']}>
    <div className={styles['movie-info__title']}>
      {title}
    </div>
    <div className={styles['movie-info__infos']}>
      <div className={styles['movie-info__actors']}>
        <ul>
          {stars.map((star) => (
            <li key={star}>{star}</li>
          ))}
        </ul>
      </div>
      <div className={styles['movie-info__format']}>
        {`Format: ${format}`}
      </div>
      <div className={styles['movie-info__year']}>
        {`Year: ${releaseYear}`}
      </div>
      <div className={styles['movie-info__controls']}>
        <Button onClick={onDeleteClick}>Delete Movie</Button>
      </div>
    </div>
  </div>
);

export default MovieInfo;
