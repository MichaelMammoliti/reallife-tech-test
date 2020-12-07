import React from 'react';

import { MovieInfoContainer } from '@containers';
import { Container, Button, DefaultPageWrapper } from '@components';

const Movies = () => (
  <DefaultPageWrapper>
    <Container>
      <Button to="/">Go back</Button>
      <MovieInfoContainer />
    </Container>
  </DefaultPageWrapper>
);

export default Movies;
