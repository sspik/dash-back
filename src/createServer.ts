import { ApolloServer } from "apollo-server-express";
import routes from "./routes";
import express from "express";
import connect from "./connect";

const {
  BACKEND_PORT,
  MONGO_URL,
  MONGO_PORT,
  MONGO_DB
} = process.env


export async function runServer(server: ApolloServer){
  const app = await routes(express());
  server.applyMiddleware({ app });

  app.listen({
    port: BACKEND_PORT
    }, () =>
    console.log(`🚀 Server ready`)
  );

  const db = `mongodb://localhost:${MONGO_PORT}/${MONGO_DB}`;
  connect({ db });
}
