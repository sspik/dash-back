import { Request, Response } from 'express'
import {decodeToken, refreshToken} from "../utils";
import {IUserJWTPayload} from "../interfaces";
import { User } from '../models/userSchema';

const authPaths: Array<string> = [
  '/auth/client',
  '/auth/login',
];

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: any
) => {
  if (authPaths.includes(req.path)){
    next();
    return
  }
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).send('Доступ запрещён');
    const userData = decodeToken(token) as IUserJWTPayload;
    const user = await User.findById(userData.userId);
    if (user.expires < Date.now()) {
      await refreshToken(user);
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(400).json({
      error: new Error('Неправильный токен')
    });
    next();
  }
};
