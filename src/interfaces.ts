import { IUserModel } from "./models/user";
import { ReadStream } from "fs";

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

export interface IFileStream {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => ReadStream;
}

declare global {
  namespace Express {
    interface Request {
      user?: IUserModel;
    }
  }
}
