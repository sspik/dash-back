import { Request, Response } from 'express'
import {User} from './core/controllers/user'
import {IUser} from "./core/models/userScheme";

const getClientCode = (req: Request, res: Response): void => {
  res.redirect(
    302,
    `${process.env.BITRIX24_URL}/oauth/authorize/?client_id=${process.env.CLIENT_ID}`
  )
};

const getTokens = async (req: Request, res: Response): Promise<void> => {
  const { code, server_domain } = req.query;
  const user = await User.getOrCreate(code, server_domain);
  const redirectTo = 'http://localhost:3000';
  res.cookie('jwt', user.accessToken);
  res.redirect(redirectTo);
};

export default {
  getClientCode,
  getTokens
}