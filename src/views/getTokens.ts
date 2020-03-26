import {Request, Response} from "express";
import {IBitrixAuthParams} from "../interfaces";
import Axios from "axios";
import {User} from "../models/userSchema";

export default async (req: Request, res: Response): Promise<void> => {
  const { code, server_domain } = req.query;
  const params: IBitrixAuthParams = {
    code,
    member_id: process.env.MEMBER_ID,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.APP_SECRET,
    grant_type: 'authorization_code'
  };
  const bitrixResponse = await Axios.get(
    `https://${server_domain}/oauth/token`,
    { params }
  );
  const { data } = bitrixResponse;
  if (await User.exists({userId: data.user_id})){
    await User.findOneAndUpdate({userId: data.user_id}, {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expires: Date.now() + 60*60*1000
    })
  } else {
    await new User({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      userId: data.user_id,
      expires: Date.now() + 60*60*1000
    }).save()
  }
  const user = await User.findById(data.user_id);
  const token = user.generateAuthToken();
  res.cookie('token', token);
  res.send(`<script>window.close();</script>`)
};
