
const {gql } = require('apollo-server-express')
const typeDefs = gql `
extend type Query {
    users: [User]
    user(id: Int!): User
    me: User
}
type User{
    id: ID!
    name: String!
}
extend type Mutation{
    makeUser(id: Int!,name:String!): User!
    deleteUser(id: Int!): Boolean!
}
`;
module.exports = typeDefs