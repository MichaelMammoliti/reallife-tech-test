import React from 'react';

import { Row, Column } from '@components';

import { UploadMoviesFormContainer, AddMovieFormContainer } from '@containers';

import styles from './sidebar.scss';

const Sidebar = () => (
  <div className={styles['sidebar']}>
    <Row spacing="m">
      <Column size="1">
        <AddMovieFormContainer />
      </Column>
      <Column size="1">
        <UploadMoviesFormContainer />
      </Column>
    </Row>
  </div>
);

export default Sidebar;
