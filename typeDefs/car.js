
const {gql } = require('apollo-server-express')
const typeDefs = gql `
extend type Query {
    cars: [Car]
    car(id: Int): Car
}
type Car {
    id: ID!
    make: String!
    model: String!
    colour: String!
    owner: User!
}
`;

module.exports = typeDefs