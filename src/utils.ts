import jwt from "jsonwebtoken";
import {IUserJWTPayload} from "./interfaces";
import {IUserModel} from "./models/user";
import axios from "axios";

export function decodeToken(token: string) {
  const secret = process.env.SECRET_KEY;
  return jwt.verify(token, secret)
}

export function encodeToken(payload: IUserJWTPayload) {
  return jwt.sign(
    payload,
    process.env.SECRET_KEY
  )
}

export async function refreshToken(user: IUserModel) {
  const params = {
    grant_type: 'refresh_token',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.APP_SECRET,
    refresh_token: user.refreshToken
  };
  try {
    const response = await axios.get(
      process.env.BITRIX_REFRESH_TOKEN_URL,
      {
        params
      });
    const { data } = response;
    await user.updateUser({
      userId: data.user_id,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expires: Date.now() + 60 * 60 * 1000,
    })
  } catch (e) {
    throw new Error(
      'На стадии обновления токена, oauth.bitrix.info ' +
      'отдал ошибочный ответ сервера'
    )
  }
}
