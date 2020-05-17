"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const connect_1 = __importDefault(require("./connect"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_import_1 = require("graphql-import");
const resolvers_1 = require("./resolvers");
const routes_1 = __importDefault(require("./routes"));
const dataSources_1 = require("./dataSources");
const typeDefs = graphql_tag_1.default(graphql_import_1.importSchema(`${process.env.SCHEMA_PATH}schema.graphql`));
const app = routes_1.default(express_1.default());
exports.server = new apollo_server_express_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.resolvers,
    dataSources: () => ({
        bitrixApi: new dataSources_1.BitrixAPI(),
        yandexMetrikaApi: new dataSources_1.YandexMetrikaApi(),
        topvisorApi: new dataSources_1.TopvisorApi(),
    }),
    context: ({ req }) => {
        return { user: req.user };
    }
});
exports.server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${exports.server.graphqlPath}`));
const db = process.env.MONGO_URL;
connect_1.default({ db });
//# sourceMappingURL=index.js.map