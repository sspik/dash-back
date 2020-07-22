import { Request, Response } from 'express';
import CrudApi from "./crudBase";

type TRouterFnc = (req: Request, resp: Response, next?: () => void) => void

type TRouter = {
  path: string;
  fnc: TRouterFnc
}

interface IRouterClass {
  createRoutes(): void;
}

export class Router implements IRouterClass {
  private readonly apiCls: CrudApi<any, any>[];
  routes: TRouter[] = [];
  constructor(apiCls: CrudApi<any, any>[]) {
    this.apiCls = apiCls;
  }
  async createRoutes() {
    return await Promise.all([() => this.apiCls.forEach((cls) => {
      this.routes.concat([
        {
          path: cls.entryPoint,
          fnc: this.getAll(cls)
        },
        {
          path: `${cls.entryPoint}/:id`,
          fnc: this.get(cls)
        },
        {
          path: `${cls.entryPoint}`,
          fnc: this.post(cls)
        },
        {
          path: `${cls.entryPoint}/:id`,
          fnc: this.update(cls)
        },
        {
          path: `${cls.entryPoint}/:id`,
          fnc: this.deleteObject(cls)
        }
      ])
    })])
  }

  private getAll(cls: CrudApi<any, any>) {
    return (req: Request, resp: Response): void => {
      const objArray = cls.getAll();
      resp.contentType('application/json');
      resp.send(objArray)
    }
  }

  private get(cls: CrudApi<any, any>) {
    return async (req: Request, resp: Response, next: () => void): Promise<void> => {
      const id = req.params.id;
      try {
        const obj = await cls.get(id);
        resp.contentType('application/json');
        resp.send(obj);
      } catch (e) {
        next();
      }
    }
  }

  private post(cls: CrudApi<any, any>) {
    return async (req: Request, resp: Response): Promise<void> => {
      const data = req.body;
      try {
        cls.validateData(data);
      } catch (e) {
        resp.statusCode = 400;
        resp.send('Bad Request')
      }
      try {
        await cls.create({ ...data });
        resp.statusCode = 201;
        resp.send('Created');
      } catch (e) {
        throw e;
      }
    }
  }

  private update(cls: CrudApi<any, any>) {
    return async (req: Request, resp: Response): Promise<void> => {
      const id = req.params.id;
      const data = req.body;
      try {
        cls.validateData(data);
      } catch (e) {
        resp.statusCode = 400;
        resp.send('Bad Request')
      }
      try {
        await cls.update(id, data);
        resp.statusCode = 204;
        resp.send('No Content');
      } catch (e) {
        throw e;
      }
    }
  }

  private deleteObject(cls: CrudApi<any, any>) {
    return async (req: Request, resp: Response): Promise<void> => {
      const id = req.params.id;
      try {
        await cls.delete(id);
        resp.statusCode = 204
        resp.send('No Content');
      } catch (e) {
        throw e
      }
    }
  }
}
