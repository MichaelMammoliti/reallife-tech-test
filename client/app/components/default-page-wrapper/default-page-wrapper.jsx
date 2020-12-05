import React from 'react';

import { Row, Column, Sidebar, Container } from '@components';

const DefaultPageWrapper = ({ children }) => (
  <Container>
    <Row spacing="m">
      <Column p="1" t="3" d="3">
        <Sidebar />
      </Column>
      <Column grow p="1">
        {children}
      </Column>
    </Row>
  </Container>
);

export default DefaultPageWrapper;
