import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Tool {
    id: Int!
    name: String!
    description: String
    created_at: String!
    calls: [Call!]!
  }

  type Call {
    id: Int!
    tool_id: Int!
    input: String!
    output: String
    created_at: String!
    tool: Tool!
  }

  type User {
    id: Int!
    email: String!
    name: String!
  }

  type Query {
    tools: [Tool!]!
    calls: [Call!]!
    users: [User!]!
  }

  type Mutation {
    create_tool(name: String!, description: String): Tool!
    create_call(tool_id: Int!, input: String!, output: String): Call!
    create_user(email: String!, name: String!): User!
  }
`; 