import {Application} from "express";
import views from "./views";
import {authMiddleware} from "./middleswares/auth";
import cookieParser from 'cookie-parser'

export default (app: Application) => {
  app.use(cookieParser());
  app.use(authMiddleware);
  app.set('view engine', 'pug');
  app.set('views', process.env.TEMPLATE_PATH);
  app.get('/auth/client', views.getClientCode);
  app.get('/auth/login', views.getTokens);
  app.get('/', authMiddleware, views.homePage);
  return app;
};