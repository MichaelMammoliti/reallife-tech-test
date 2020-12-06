import React from 'react';

import { MovieInfoContainer, DefaultPageWrapper } from '@containers';
import { Container, Button } from '@components';

const Movies = () => (
  <DefaultPageWrapper>
    <Container>
      <Button to="/">Go back</Button>
      <MovieInfoContainer />
    </Container>
  </DefaultPageWrapper>
);

export default Movies;
