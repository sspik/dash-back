import mongoose, { Schema, Document } from 'mongoose';
import { encodeToken } from "../utils";

interface IUserBase {
  userId: number;
  accessToken: string;
  refreshToken: string;
  expires: number;
  isAdmin: boolean;
}

export interface IUserModel extends IUserBase {
  findById(id: string): IUser
  generateAuthToken(): string
  updateUser(userData: IUserBase): Promise<void>
}

export interface IUser extends Document, IUserModel {}

const UserSchema: Schema = new Schema({
  userId: { type: Number, required: true, unique: true },
  accessToken: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true, unique: true },
  expires: { type: Number, required: true },
  isAdmin: { type: Boolean, required: true },
});

UserSchema.statics.findById = async function findById(
  userId: IUserBase['userId']
): Promise<IUser> {
  const user = await User.findOne({ userId });
  if (!user) {
    throw new Error('User not found')
  }
  return user
};

UserSchema.methods.updateUser = async function updateUser(
  userData: IUser
): Promise<void> {
  Object.assign(this, {
    ...userData
  });
  await this.save();
};

UserSchema.methods.generateAuthToken = function generateAuthToken (): string {
  return encodeToken({
    userId: this.userId,
    expires: this.expires,
    accessToken: this.accessToken,
    refreshToken: this.refreshToken,
    isAdmin: this.isAdmin,
  })
};
export const User = mongoose.model<IUser>('User', UserSchema);

