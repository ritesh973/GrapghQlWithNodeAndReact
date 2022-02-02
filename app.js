const express = require('express');
const { ApolloServer } = require('apollo-server-express')

const models = require('./models')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const me = models.users[0]

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({
        typeDefs, 
        resolvers,
        context:{
            models,
            me
        }
    })
    const app = express();
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    
    app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
})
}

startApolloServer(typeDefs, resolvers);
