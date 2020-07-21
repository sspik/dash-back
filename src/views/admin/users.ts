import mongoose, { Document } from "mongoose";

export interface ICrudApi<ModelData, Model> {
  create(data: ModelData): Promise<Model>;
  get(data: keyof ModelData): Promise<Model>;
  post(data: ModelData): Promise<Model>;
  patch(id: mongoose.Types.ObjectId, data: ModelData): Promise<Model>;
  delete(data: keyof ModelData): Promise<void>;
}

abstract class CrudApi<TModelData, TModel extends Document> implements ICrudApi<TModelData, TModel> {
  private readonly Model: mongoose.Model<TModel>;

  async create(data: TModelData): Promise<TModel> {
    try {
      return await new this.Model(data);
    } catch (e) {
      throw e;
    }
  }

  async delete(data: keyof TModelData): Promise<void> {
    try {
      await this.Model.remove(data)
    } catch (e) {
      throw e
    }
  }

  async get(data: keyof TModelData): Promise<TModel> {
    try {
      return await this.Model.findOne(data);
    } catch (e) {
      throw e
    }
  }

  async patch(id: mongoose.Types.ObjectId, data: TModelData): Promise<TModel> {
    try {
      const model = await this.Model.findOne({_id: id});
      await model.update(data);
      await model.save();
      return model
    }
    catch (e) {
      throw e
    }
  }

  async post(data: TModelData): Promise<TModel> {
    try {
      const model = await new this.Model(data);
      await model.save();
      return model
    } catch (e) {
      throw e
    }
  }
}

export default CrudApi;