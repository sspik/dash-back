import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  userId: string;
  accessToken: string;
  refreshToken: string;
  expires: number;
  active: boolean;
}
const UserSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  accessToken: { type: String, required: false, unique: true },
  refreshToken: { type: String, required: true, unique: true },
  active: { type: Boolean, required: true, default: true },
  expires: { type: Number, required: true }
});

export default mongoose.model<IUser>('User', UserSchema);