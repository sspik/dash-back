import express, { Application } from "express";
import views from "./views";
import { authMiddleware } from "./middleswares/auth";
import { adminMiddleware } from "./middleswares/admin";
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import { Router } from "./views/admin/Router";
import { UserRouter } from "./views/admin/user";

const router = new Router([
  new UserRouter(),
])

export default (app: Application) => {
  app.use(cookieParser());
  app.use(express.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.get('/auth/client', views.getClientCode);
  app.get('/auth/login', views.getTokens);

  app.use(authMiddleware);
  app.get('/', views.homePage);
  app.get(
    '/attachment/:attachment',
    views.getAttachment
  );

  app.use(adminMiddleware);
  router.routes.map(r => app.use(`/admin/${r.path}`, r.fnc))
  return app;
};
