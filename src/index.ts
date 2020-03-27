require('dotenv').config();

import express from 'express';
import {DocumentNode} from "graphql";
import gql from 'graphql-tag';
import connect from "./connect";
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";
import {BitrixAPI, YandexMetrikaApi} from "./dataSources";
import routes from "./routes";

const typeDefs: DocumentNode = gql(importSchema(`${process.env.SCHEMA_PATH}schema.graphql`));
const app = routes(express());


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): any => ({
    bitrixApi: new BitrixAPI(),
    yandexMetrikaApi: new YandexMetrikaApi()
  }),
  context: ({ req }) => {
    return { user: req.user }
  }
});
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

const db = process.env.MONGO_URL;
connect({ db });