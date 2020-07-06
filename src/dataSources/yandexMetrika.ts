import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import * as GraphQLTypes from '../GraphQLTypes';
import { YandexMetrika as YandexMetrkaModel } from "../models/yandexMetrika";
import { extractDomain } from "../utils";
import { Bitrix } from "./bitrix24";

interface IYandexMetrikaParams {
  metrics: string;
  date1?: string;
  date2?: string;
  dimensions?: string;
  preset?: string;
  bitrixGroupId: string;
  [key: string]: any
}

class YandexMetrikaApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = 'https://api-metrika.yandex.net';
  }

  async getYandexMetrics(
    params: IYandexMetrikaParams
  ): Promise<GraphQLTypes.YandexMetrikaApiResponse>{

    Object.keys(params).forEach(key => params[key] === undefined
      && delete params[key]);
    try {
      const { bitrixGroupId, ...yandexParams } = params;
      const response = await this.get<GraphQLTypes.YandexMetrikaApiResponse>(
        'stat/v1/data/bytime.json',
        {
          ...yandexParams,
          ids: await this.getCounterId(params.bitrixGroupId),
          lang: 'ru',
          group: "day",
        }
      );
      // Из api data.metrics приходит 2-мерным массивом, внутри которого
      // и float, и number. Конвертирую его в number для GraphQl
      return {
        ...response,
        data: response.data.map(d => ({
          ...d,
          metrics: d.metrics.map(mArr => mArr.map((m: any) => parseInt(m)))
        })),
        totals: response.totals.map(ts => ts.map((t: any) => parseInt(t)))
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  willSendRequest(request: RequestOptions): void {
    request.headers.set(
      'Authorization',
      `OAuth ${process.env.YANDEX_METRIKA_TOKEN}`,
    );
  }

  async getCounter(bitrixGroupId: GraphQLTypes.WorkGroup["ID"]): Promise<GraphQLTypes.Counter> {
    const counterId = await this.getCounterId(bitrixGroupId);
    type TResponse = { counter: GraphQLTypes.Counter }
    const response = await this.get<TResponse>(`/management/v1/counter/${counterId}`);
    if (!response.counter) throw new Error('Не удалось получилоть счётчик из API Метрики');
    return response.counter;
  }

  private async getCounterByDomain(domainString: string): Promise<GraphQLTypes.Counter> {
    const domain = extractDomain(domainString);
    if (!domain) throw new Error('Имя группы не является доменным именем');
    type TResponse = { counters: GraphQLTypes.Counter[] }
    const response = await this.get<TResponse>('management/v1/counters');
    const counters: GraphQLTypes.Counter[] = response.counters;
    if (!Array.isArray(counters)) throw new Error('Ошибка получения списка счётчиков');
    const counter = counters.filter(c => c.site === domain);
    if (counter.length === 0) throw new Error('Счётчик не найден');
    return counter[0];
  }

  private async getCounterId(bitrixGroupId: string): Promise<string> {
    let counterId: string;
    try {
      const yandexMetrika = await YandexMetrkaModel.findOne({
        bitrixGroupId
      });
      counterId = yandexMetrika.counter.toString();
    } catch (e) {
      const bitrixGroup = await Bitrix.getGroupByToken(
        bitrixGroupId,
        this.context.user.accessToken
      );
      if (!bitrixGroup) throw new Error('Группа не найдена или доступ запрещён');
      const counter = await this.getCounterByDomain(bitrixGroup.NAME);
      const yandexMetrika = new YandexMetrkaModel({
        counter: counter.id,
        bitrixGroupId,
      })
      try {
        await yandexMetrika.save();
      } catch (e) {
        // 11000 - duplicate key error. fk async
        if (e.code !== 11000) throw new Error(e)
      }
      counterId = counter.id;
    }
    return counterId
  }
}

export const YandexMetrika = new YandexMetrikaApi();
