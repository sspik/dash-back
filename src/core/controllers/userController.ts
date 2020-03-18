import User, { IUser } from "../models/userScheme";

export interface IDefaultUserInput {
  userId?: IUser['userId'];
  accessToken?: IUser['accessToken'];
  refreshToken?: IUser['refreshToken'];
}

export interface ICreateUserInput extends IDefaultUserInput {
  accessToken: IUser['accessToken'];
  refreshToken: IUser['refreshToken'];
  active: IUser['active'];
  expires: IUser['expires'];
}

export interface IUpdateUserInput extends ICreateUserInput {}
export interface IDeleteUserInput extends IDefaultUserInput {}
export interface IGetUserInput extends IDefaultUserInput {}

export interface IUserController {
  get(input: IGetUserInput): Promise<IUser | null>
  create(input: ICreateUserInput): Promise<IUser>
  update(userId: IUser['userId'], input: IUpdateUserInput): Promise<IUser>
  delete(input: IDefaultUserInput): Promise<void>
}

export class UserController implements IUserController {
  async get(input: IGetUserInput): Promise<IUser | null> {
    try {
      return await User.findOne(
        { ...input }
        )
    } catch (e) {
      return e
    }
  };
  async create(input: ICreateUserInput): Promise<IUser> {
    try {
      return await User.create(
        { ...input }
        );
    } catch (e) {
      return e
    }
  };
  async delete(input: IDeleteUserInput): Promise<void> {
    try {
      await User.deleteOne(
        { ...input }
        )
    } catch (e) {
      return e
    }
  };
  async update(userId: IUser['userId'],  input: IUpdateUserInput): Promise<IUser> {
    try {
      return await User.updateOne(
        { userId },
        { ...input }
        )
    } catch (e) {
      return e
    }
  }
}

export default new UserController();