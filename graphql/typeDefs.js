const { gql } = require('apollo-server')

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
  }
`
//You are on minute 56.52 - you are hitting an error on the graphql playground and arent quite sure where you are going wrong.
//"errors": [
// {
//   "message": "Cannot read property 'registerInput' of undefined",
//   "locations": [
//     {
//       "line": 2,
//       "column": 3
//     }
//   ],
//   "path": [
//     "register"
//   ],
//   "extensions": {
//     "code": "INTERNAL_SERVER_ERROR",
