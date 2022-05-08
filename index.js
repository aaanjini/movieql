import { createServer } from '@graphql-yoga/node';
import { importSchema } from 'graphql-import'
import resolvers from './graphql/resolvers.js';

const typeDefs = importSchema('./graphql/schema.graphql')
// Create your server
const server = createServer({
    schema: {
      typeDefs,
      resolvers
    },
});
  // start the server and explore http://localhost:4000/graphql
server.start(() => console.log("Graphql Server Running"));