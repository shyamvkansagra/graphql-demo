import { gql } from 'graphql-tag';

// GraphQL Schema Definition
export const typeDefs = gql`
  type Query {
    hello: String
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    removeUser(id: ID!): User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

// Sample data
const users = [
  { id: String(+Date.now()), name: 'John Doe', email: 'john@example.com' },
  { id: String(+Date.now()), name: 'Jane Smith', email: 'jane@example.com' },
];

// Resolvers
export const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
    users: () => users,
    user: (parent, args) => users.find(user => user.id === args.id),
  },
  Mutation: {
    addUser: (parent, args) => {
      const newUser = {
        id: String(+Date.now()),
        name: args.name,
        email: args.email,
      };
      users.push(newUser);
      return newUser;
    },
    removeUser: (parent, args) => {
      const index = users.findIndex(user => user.id === args.id);
      if (index !== -1) {
        return users.splice(index, 1)[0];
      }
      return null;
    },
  },
};

