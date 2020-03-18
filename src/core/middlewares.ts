import { Request, Response } from 'express'
import {decodeToken} from "./utils";
import {IUserJWTPayload} from "../interfaces";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: any
): void => {
  try {
    req.user = decodeToken(req.cookies.jwt) as IUserJWTPayload;
    next();
  } catch {
    res.status(401).json({
      error: new Error('Auth require')
    })
  }
};