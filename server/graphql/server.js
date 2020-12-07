const { ApolloServer, gql } = require('apollo-server');
// const { typeDefs, resolvers } = require('./schema');

require('../mongoose');

const typeDefs = gql`
  type Obj {
    title: String
  }

  type Query {
    hello: Obj
  }
`;

const resolvers = {
  Query: {
    hello: () => ({ title: 'hello' }),
  }
}

const server = new ApolloServer({ typeDefs, resolvers, playground: { endpoint: '/graphql' } });

server.listen().then(() => {
  console.log('Server is running! Listening on port 4000');
});
