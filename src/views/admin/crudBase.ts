import mongoose, { Document } from "mongoose";

export interface ICrudApi<ModelData, Model> {
  create(data: ModelData): Promise<void>;
  get(id: string): Promise<Model>;
  update(id: string, data: ModelData): Promise<void>;
  delete(id: string): Promise<void>;
}

abstract class CrudApi<TModelData, TModel extends Document> implements ICrudApi<TModelData, TModel> {
  Model: mongoose.Model<TModel>;
  abstract validateData(obj: any): void;

  async create(data: TModelData): Promise<void> {
    try {
      const model = new this.Model(data);
      await model.save();
    } catch (e) {
      throw e;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.Model.remove({_id: id})
    } catch (e) {
      throw e
    }
  }

  async get(id: string): Promise<TModel> {
    try {
      return await this.Model.findOne({_id: id});
    } catch (e) {
      throw e
    }
  }

  async update(id: string, data: TModelData): Promise<void> {
    try {
      const model = await this.Model.findByIdAndUpdate({_id: id}, data);
      await model.save();
    }
    catch (e) {
      throw e
    }
  }
}

export default CrudApi;