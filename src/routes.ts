import {Application} from "express";
import views from "./views";
import {authMiddleware} from "./core/middlewares";

export default (app: Application) => {
  app.get('/auth/client', views.getClientCode);
  app.get('/auth/login', views.getTokens);
  return app;
};