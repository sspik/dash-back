import { Request, Response } from 'express';

export const adminMiddleware = (
  req: Request,
  resp: Response,
  next: () => void) => {
  if (req.user.isAdmin){
    next()
  }
  resp.statusCode = 403;
  next();
}