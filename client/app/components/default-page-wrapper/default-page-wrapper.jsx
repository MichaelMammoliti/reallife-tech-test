import React from 'react';

import { Row, Column, Sidebar, Container } from '@components';

const DefaultPageWrapper = ({ children }) => (
  <Container>
    <Row spacing="m">
      <Column size="2">
        <Sidebar />
      </Column>
      <Column size="2">
        {children}
      </Column>
    </Row>
  </Container>
);

export default DefaultPageWrapper;
