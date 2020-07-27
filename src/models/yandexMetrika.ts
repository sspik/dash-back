import mongoose, { Schema, Document } from 'mongoose';

interface IYandexMetrikaBase {
  counter: number;
  bitrixGroupId: number;
  goals: number[];
}

const GoalSchema: Schema = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true, unique: true },
})

export interface IYandexMetrika extends Document, IYandexMetrikaBase {}

const YandexMetrikaSchema: Schema = new Schema({
  counter: { type: Number, required: true, unique: true },
  bitrixGroupId: { type: Number, required: true, unique: true },
  goals: { type: [GoalSchema], required: false, unique: false, default: undefined },
});

export const YandexMetrika = mongoose.model<IYandexMetrika>(
  'YandexMetrika',
  YandexMetrikaSchema
);
