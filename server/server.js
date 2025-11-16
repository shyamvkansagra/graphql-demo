import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schema.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the Apollo Server
await server.start();

// Apply CORS and Apollo GraphQL middleware
app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server)
);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  console.log(`📊 GraphQL Playground available at http://localhost:${PORT}/graphql`);
});

