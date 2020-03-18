import jwt from "jsonwebtoken";
import {IUserJWTPayload} from "../interfaces";

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
