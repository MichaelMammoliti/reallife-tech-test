import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { Page } from '@components';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Page />
    </Router>
  </ApolloProvider>
);

export default App;
