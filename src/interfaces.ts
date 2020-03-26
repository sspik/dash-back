import {IUserModel} from "./models/userSchema";

export interface IBitrixAuthRequest {
  grand_type: String;
  client_id: String;
  client_secret: String;
  refresh_token: String;
}

export interface IBitrixAuthResponse {
  access_token: String;
  client_endpoint: String;
  domain: String;
  expires_in: Number;
  member_id: String;
  refresh_token: String;
  scope: String;
  server_endpoint: String;
  status: String;
}

export interface IBitrixLoginResponse {
  code: string
  member_id: string
  server_id: string
}

export interface IUserJWTPayload {
  userId: number;
  accessToken: string;
  refreshToken: string;
  expires: number;
}

export interface IBitrixAuthParams {
  code: string;
  member_id: string,
  client_id: string,
  client_secret: string,
  grant_type: string
}

declare module 'express' {
    interface Request {
    user: IUserModel | undefined;
  }
}