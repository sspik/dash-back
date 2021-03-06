import express, { Application } from "express";
import views from "./views";
import { authMiddleware } from "./middleswares/auth";
import { adminMiddleware } from "./middleswares/admin";
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import { Router } from "./views/admin/Router";
import { UserRouter } from "./views/admin/user";
import { TopvisorRouter } from "./views/admin/topvisor";
import { YandexMetrikaRouter } from "./views/admin/yandexMetrika";

const AdminRouter = new Router([
  new UserRouter(),
  new TopvisorRouter(),
  new YandexMetrikaRouter(),
])

export default async (app: Application) => {
  app.use(cookieParser());
  app.use(express.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.get('/', views.homePage);
  app.get('/auth/client', views.getClientCode);
  app.get('/auth/login', views.getTokens);

  app.use(authMiddleware);
  app.get(
    '/attachment/:attachment',
    views.getAttachment
  );

  await AdminRouter.createRoutes();
  AdminRouter.routes.forEach(r =>
    app[r.method](`^/admin/${r.path}$`, adminMiddleware, r.fnc)
  )
  return app;
};
