import mongoose, { Schema, Document } from 'mongoose';

interface ITopvisorBase {
  projectId: number;
  bitrixGroupId: number;
}

export interface ITopvisor extends Document, ITopvisorBase {}

const TopvisorScheme: Schema = new Schema({
  projectId: { type: Number, required: true, unique: true },
  bitrixGroupId: { type: Number, required: true, unique: true },
});

export const Topvisor = mongoose.model<ITopvisor>(
  'TopVisor',
  TopvisorScheme,
);
