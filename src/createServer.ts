import { ApolloServer } from "apollo-server-express";
import routes from "./routes";
import express from "express";
import connect from "./connect";

const {
  BACKEND_PORT,
  MONGO_URL
} = process.env


export async function runServer(server: ApolloServer){
  const app = await routes(express());
  server.applyMiddleware({ app });

  app.listen({
    port: BACKEND_PORT
    }, () =>
    console.log(`🚀 Server ready`)
  );

  connect({ db: MONGO_URL });
}
