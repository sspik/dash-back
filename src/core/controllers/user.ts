import {IUser} from "../models/userScheme";
import UserController from "./userController";
import axios from 'axios';


export class User {

  private readonly _id: string;
  private active: boolean;
  accessToken: string;
  private refreshToken: string;
  expires: number;

  constructor(userData: IUser) {
    this._id = userData.userId;
    this.accessToken = userData.accessToken;
    this.refreshToken = userData.refreshToken;
    this.active = userData.active;
    this.expires = userData.expires;
  }
  static async create(inputs: IUser): Promise<User> {
    const user = await UserController.create({ ...inputs });
    return new User(user);
  }
  get id(): string {
    return this._id
  }
  static async getOrCreate(
    code: string,
    server_domain: string
  ) {
    const {
      access_token,
      expires,
      user_id,
      refresh_token,
    } = await this.getUserData(
      code,
      server_domain
    );
    const userData = await UserController.get({ userId: user_id });
    return userData
      ? new User(userData)
      : new User(await UserController.create({
        refreshToken: refresh_token,
        active: true,
        userId: user_id,
        expires,
        accessToken: access_token,
      }));
  }
  private static async getUserData(
    code: string,
    server_domain: string,
  ): Promise<any> {
    /*
      Авторизация пользователя идёт через их сервер oauth.bitrix.ru
      с предоставлением member_id как id портала =\
    */
    try {
      const response =  await axios.get(
        `https://${server_domain}/oauth/token/`,
        {
          params: {
            code,
            member_id: process.env.MEMBER_ID,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.APP_SECRET,
            grant_type: 'authorization_code'
          }
        }
      );
      return response.data;
    } catch (e) {
      return e
    }
  }
}