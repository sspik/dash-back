import express, { Application } from "express";
import views from "./views";
import { authMiddleware } from "./middleswares/auth";
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";

export default (app: Application) => {
  app.use(cookieParser());
  app.use(express.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(authMiddleware);
  app.get('/auth/client', views.getClientCode);
  app.get('/auth/login', views.getTokens);
  app.get('/', authMiddleware, views.homePage);
  app.get(
    '/attachment/:attachment',
    authMiddleware,
    views.getAttachment
  );

  return app;
};
