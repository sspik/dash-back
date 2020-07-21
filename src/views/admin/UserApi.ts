import { Request, Response } from 'express';
import CrudApi from "./crudBase";
import { IUser, User } from "../../models/user";
import mongoose from "mongoose";

interface IUserData {
  userId?: number;
  accessToken?: string;
  refreshToken?: string;
  expires?: number;
  isAdmin?: boolean;
}

class UserApi extends CrudApi<IUserData, IUser>{
  readonly fields: Array<keyof IUserData>  = [
    "userId", "accessToken", "refreshToken", "expires", "isAdmin"
  ]
  constructor(model: mongoose.Model<IUser>) {
    super();
    this.Model = model;
  };
  validateData(obj: any): void {
    Object.keys(obj).forEach((key: any) => {
      if (!this.fields.includes(key)) throw new Error('Невалидные данные')
    });
  }
}

const userApi = new UserApi(User)

export const getAll = async (req: Request, resp: Response): Promise<void> => {
    const users = await User.find({});
    resp.contentType('application/json');
    resp.send(users)
}

export const get = async (req: Request, resp: Response, next: () => void): Promise<void> => {
  const id = req.params.id;
  try {
    const user = await userApi.get(id);
    resp.contentType('application/json');
    resp.send(user);
  } catch (e) {
    next();
  }
}

export const post = async (req: Request, resp: Response): Promise<void> => {
  const data = req.body as IUserData;
  try {
    userApi.validateData(data);
  } catch (e) {
    resp.statusCode = 400;
    resp.send('Bad Request')
  }
  try {
    await userApi.create({ ...data });
    resp.statusCode = 201;
    resp.send('Created');
  } catch (e) {
    throw e;
  }
}

export const update = async (req: Request, resp: Response): Promise<void> => {
  const id = req.params.id;
  const data = req.body;
  try {
    userApi.validateData(data);
  } catch (e) {
    resp.statusCode = 400;
    resp.send('Bad Request')
  }
  try {
    await userApi.update(id, data);
    resp.statusCode = 204;
    resp.send('No Content');
  } catch (e) {
    throw e;
  }
}

export const deleteUser = async (req: Request, resp: Response): Promise<void> => {
  const id = req.params.id;
  try {
    await userApi.delete(id);
    resp.statusCode = 204
    resp.send('No Content');
  } catch (e) {
    throw e
  }
}
