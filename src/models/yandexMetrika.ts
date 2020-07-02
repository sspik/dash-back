import mongoose, { Schema, Document } from 'mongoose';

interface IYandexMetrikaBase {
  counter: number;
  userId: number;
  bitrixGroupId: number;
}

export interface IYandexMetrika extends Document, IYandexMetrikaBase {}

const YandexMetrikaSchema: Schema = new Schema({
  counter: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true, unique: false },
  bitrixGroupId: { type: Number, required: true, unique: true },
});

export const YandexMetrika = mongoose.model<IYandexMetrika>(
  'YandexMetrika',
  YandexMetrikaSchema
);
