const schema = `
type User {
email: String!
name: String!
}

type LoginResponse {
    success: Boolean!
    error: String!
    token: String!
    user: User
}

type Query {
    healthCheck: String!
}

type Mutation {
    login(email: String!, password: String!): LoginResponse!
}
`;

export default schema;
