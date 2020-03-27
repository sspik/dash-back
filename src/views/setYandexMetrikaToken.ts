import {Request, Response} from "express";
import {User} from "../models/userSchema";

interface PostData {
  ids: number
}

export default async (req: Request, res: Response,): Promise<void> => {
  res.contentType('Application/json');
  try {
    const {ids} = req.body as PostData ;
    const {user} = req;
    await req.user.updateUser({
      userId: user.userId,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
      expires: user.expires,
      yandexMetrikaId: ids
    });
    res.send(JSON.stringify({
      status: 'ok'
    }))
  } catch (e)  {
    console.log(e)
    res.status(400);
    res.send(JSON.stringify({
      status: 'error'
    }))
  }

}