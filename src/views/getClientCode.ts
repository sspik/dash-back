import {Request, Response} from "express";

export default (req: Request, res: Response): void => {
  res.redirect(
    302,
    `${process.env.BITRIX24_URL}/oauth/authorize/?client_id=${process.env.CLIENT_ID}`
  )
};