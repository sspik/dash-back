import CrudApi from "./crudBase";
import { IYandexMetrika, YandexMetrika } from "../../models/yandexMetrika";

export interface IYandexMetrikaData {
  counter?: number;
  bitrixGroupId?: number;
}

export class YandexMetrikaRouter extends CrudApi<IYandexMetrikaData, IYandexMetrika>{
  readonly fields: Array<keyof IYandexMetrikaData>  = [
    "counter", "bitrixGroupId"
  ]
  entryPoint = 'yandex-metrika';
  constructor() {
    super();
    this.Model = YandexMetrika;
  };
  validateData(obj: any): void {
    Object.keys(obj).forEach((key: any) => {
      if (!this.fields.includes(key)) throw new Error('Невалидные данные')
    });
  }
}
