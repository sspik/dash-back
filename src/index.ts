require('dotenv').config();

import { DocumentNode } from "graphql";
import { ApolloServer, gql } from "apollo-server-express";
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";
import { runServer } from "./createServer";
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

runServer( server );
