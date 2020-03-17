import {IBitrixAuthRequest, IBitrixAuthResponse} from "./interfaces";

export const resolvers = {
  Query: {
    bitrixAuthRequest: async (
      _: any,
      rest: IBitrixAuthRequest,
      { dataSources }: any): Promise<any> => {
      await dataSources.bitrixApi.bitrixAuthRequest({...rest})
    }
  }
}