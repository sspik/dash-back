import {Request, Response} from "express";

export default function (req: Request, res: Response) {
  return res.render('index', {
    title: 'title',
    message: 'hello'
  })
}