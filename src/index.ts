require('dotenv').config();

import express from 'express';
import connect from "./connect";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from './schema'
import { resolvers } from "./resolvers";
import {BitrixAPI} from "./dataSources/bitrix24";

import routes from "./routes";

const app = routes(express());


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): any => ({
    bitrixApi: new BitrixAPI()
  })
});
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

const db = 'mongodb://localhost:27017/dash';
connect({ db });