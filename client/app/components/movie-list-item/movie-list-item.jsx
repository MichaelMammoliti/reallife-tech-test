import React from 'react';

import { Button, Row, Column } from '@components';

import styles from './movie-list-item.scss';

const MovieListItem = ({ title, id }) => (
  <div className={styles['movie-list-item']}>
    <Row alignItems="center">
      <Column grow>
        <p>{title}</p>
      </Column>
      <Column>
        <Button to={`/movies/${id}`}>View</Button>
      </Column>
    </Row>
  </div>
);

export default MovieListItem;
