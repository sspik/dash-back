import CrudApi from "./crudBase";
import { ITopvisor, Topvisor } from "../../models/topvisor";

export interface ITopvisorData {
  projectId?: number;
  bitrixGroupId?: number;
}

export class TopvisorRouter extends CrudApi<ITopvisorData, ITopvisor>{
  readonly fields: Array<keyof ITopvisorData>  = [
   "projectId", "bitrixGroupId"
  ]
  entryPoint = 'topvisor';
  constructor() {
    super();
    this.Model = Topvisor;
  };
  validateData(obj: any): void {
    Object.keys(obj).forEach((key: any) => {
      if (!this.fields.includes(key)) throw new Error('Невалидные данные')
    });
  }
}
