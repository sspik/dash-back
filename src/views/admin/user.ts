import CrudApi from "./crudBase";
import {IUser, User} from "../../models/user";

export interface IUserData {
  userId?: number;
  accessToken?: string;
  refreshToken?: string;
  expires?: number;
  isAdmin?: boolean;
}

export class UserRouter extends CrudApi<IUserData, IUser>{
  readonly fields: Array<keyof IUserData>  = [
    "userId", "accessToken", "refreshToken", "expires", "isAdmin"
  ]
  entryPoint = 'users';
  constructor() {
    super();
    this.Model = User;
  };
  validateData(obj: any): void {
    Object.keys(obj).forEach((key: any) => {
      if (!this.fields.includes(key)) throw new Error('Невалидные данные')
    });
  }
}
