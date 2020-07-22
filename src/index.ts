require('dotenv').config();

import express from 'express';
import connect from "./connect";
import { DocumentNode } from "graphql";
import { ApolloServer, gql } from "apollo-server-express";
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";
import routes from "./routes";
import {
  Bitrix,
  YandexMetrika,
  Topvisor,
  Admin
} from "./dataSources";

const typeDefs: DocumentNode = gql(importSchema(
  `${process.env.SCHEMA_PATH}schema.graphql`)
);

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: false,
  dataSources: () => ({
    bitrixApi: Bitrix,
    yandexMetrikaApi: YandexMetrika,
    topvisorApi: Topvisor,
    adminApi: Admin,
  }),
  context: ({ req }) => {
    return { user: req.user }
  }
});

async function runServer(){
  const app = await routes(express());
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );

  const db = process.env.MONGO_URL;
  connect({ db });
}

runServer();
