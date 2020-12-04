import React from 'react';
import { Container, Row, Column, Input } from '@components';

import styles from './header.scss';

const Header = ({ onSearchActorChange, onSearchMovieChange }) => (
  <div className={styles['header']}>
    <Container>
      <Row spacing="m">
        <Column p="1" t="2" d="2">
          <Input placeholder="search movie" onChange={onSearchMovieChange} />
        </Column>
        <Column p="1" t="2" d="2">
          <Input placeholder="search movie" onChange={onSearchActorChange} />
        </Column>
      </Row>
    </Container>
  </div>
);

export default Header;
