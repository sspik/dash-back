import { ApolloServer } from "apollo-server-express";
import routes from "./routes";
import express from "express";
import connect from "./connect";

export async function runServer(server: ApolloServer){
  const app = await routes(express());
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );

  const db = process.env.MONGO_URL;
  connect({ db });
}
