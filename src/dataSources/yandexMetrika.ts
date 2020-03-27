import {RequestOptions, RESTDataSource} from "apollo-datasource-rest";
import * as GraphQLTypes from '../GraphQLTypes';

export class YandexMetrikaApi extends RESTDataSource {

  async willSendRequest(request: RequestOptions): Promise<void> {
    request.headers.set(
      'Authorization',
      `OAuth ${process.env.YANDEX_METRIKA_TOKEN}`,
    );
    request.params.set(
      'ids',
      this.context.user.yandexMetrikaId,
    )
  }
}