import {Application} from "express";
import {CLIENT_ID} from "./constants";
import views from "./views";

export default (app: Application) => {
  app.get('/auth/client', views.getClientCode);
  app.get('/auth/login', views.getTokens);
  return app
};