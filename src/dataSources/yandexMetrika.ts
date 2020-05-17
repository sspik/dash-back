import {RequestOptions, RESTDataSource} from "apollo-datasource-rest";
import * as GraphQLTypes from '../GraphQLTypes';

interface IYandexMetrikaParams {
  metrics: string;
  date1?: string;
  date2?: string;
  dimensions?: string;
  [key: string]: any
}

export class YandexMetrikaError extends Error{}

export class YandexMetrikaApi extends RESTDataSource {

  private error = new YandexMetrikaError('Ошибка Яндекс Метрики');

  constructor() {
    super();
    this.baseURL = 'https://api-metrika.yandex.net';
  }

  async getYandexMetrics(
    params: IYandexMetrikaParams
  ): Promise<GraphQLTypes.YandexMetrikaApiResponse> {
    Object.keys(params).forEach(key => params[key] === undefined
      ? delete params[key] : {});
    return await this.get('stat/v1/data.json', {
      ...params,
      ids: this.context.user.yandexMetrikaId,
      lang: 'ru',
    })
  }
  async checkCounter(counter: number): Promise<GraphQLTypes.Counter> {
    const resp = await this.get(`management/v1/counter/${counter}`);
    if (!resp.counter) {
      throw this.error;
    }
    return resp.counter;
  }

  willSendRequest(request: RequestOptions): void {
    request.headers.set(
      'Authorization',
      `OAuth ${process.env.YANDEX_METRIKA_TOKEN}`,
    );
  }
}
