import { Request, Response } from 'express';

export const adminMiddleware = (
  req: Request,
  resp: Response,
  next: () => void) => {
  if (req.user.isAdmin){
    next();
    return;
  }
  resp.statusCode = 403;
  resp.send('Доступ запрещён')
}