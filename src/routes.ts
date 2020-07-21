import express, { Application } from "express";
import views from "./views";
import { authMiddleware } from "./middleswares/auth";
import { adminMiddleware } from "./middleswares/admin";
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import * as UserApi from "./views/admin/UserApi"

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
  app.get('/admin/users', UserApi.getAll);
  app.get('/admin/users/:id', UserApi.get);
  app.post('/admin/users/', UserApi.post);
  app.put('/admin/users/:id', UserApi.update);
  app.delete('/admin/users/:id', UserApi.deleteUser);

  return app;
};
