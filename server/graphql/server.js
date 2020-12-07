const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./schema');

require('../mongoose');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log(`Server is running! Listening on port 4000`);
});
