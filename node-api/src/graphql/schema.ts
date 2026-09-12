const schema = `
type User {
email: String!
name: String!
}

type AuthPayload  {
    success: Boolean!
    error: String
    token: String
    user: User
}

input LoginInput {
    email: String!
    password: String!
  }

type Query {
    healthCheck: String!
}

type Mutation {
    login(email: String!, password: String!): AuthPayload !
}
`;

export default schema;
