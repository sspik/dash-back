import { gql } from 'apollo-server';

export const typeDefs = gql`
  type BitrixAuthResponse {
    access_token: String
    client_endpoint: String
    domain: String
    expires_in: Int
    member_id: String
    refresh_token: String
    scope: String
    server_endpoint: String
    status: String
  }
  type Query {
    bitrixAuthRequest(
      grand_type: String!
      client_id: String!
      clinet_secret: String!
      refresh_token: String
    ): BitrixAuthResponse!
    bitrixGetTokens(
      grant_type: String
      client_id: String
      client_secret: String
      code: String
    ): BitrixAuthResponse!
  }
`;

