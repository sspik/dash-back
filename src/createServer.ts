import { ApolloServer } from "apollo-server-express";
import routes from "./routes";
import express from "express";
import connect from "./connect";

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DB,
  MONGO_HOSTNAME,
  BACKEND_PORT,
} = process.env


export async function runServer(server: ApolloServer){
  const app = await routes(express());
  server.applyMiddleware({ app });

  app.listen({
    port: BACKEND_PORT
    }, () =>
    console.log(`🚀 Server ready`)
  );

  const db = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
  connect({ db });
}
