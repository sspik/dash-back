import {RESTDataSource} from "apollo-datasource-rest";
import {BITRIX24_TOKEN_URL, BITRIX24_URL} from "../constants";
import {IBitrixAuthRequest, IBitrixAuthResponse} from "../interfaces";

export class BitrixAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BITRIX24_URL
  }
  async bitrixAuthRequest(rest: IBitrixAuthRequest): Promise<IBitrixAuthResponse> {
    const response =  await this.get(
      BITRIX24_TOKEN_URL,
      { ...rest }
    );
    return response
  }
}