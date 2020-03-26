require('dotenv').config();

import express from 'express';
import connect from "./connect";
import { ApolloServer } from "apollo-server-express";

import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";
import {BitrixAPI} from "./dataSources/bitrix24";

import routes from "./routes";
import {IUserJWTPayload} from "./interfaces";
import {User} from "./models/userSchema";

const typeDefs = importSchema(`${process.env.SCHEMA_PATH}schema.graphql`);
const app = routes(express());


const server = new ApolloServer({
  // @ts-ignore
  typeDefs,
  resolvers,
  dataSources: (): any => ({
    bitrixApi: new BitrixAPI()
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