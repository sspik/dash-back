import mongoose, {Schema, Document} from 'mongoose';
import {encodeToken} from "../utils";

interface IUserBase {
  userId: number;
  accessToken: string;
  refreshToken: string;
  expires: number;
}

export interface IUserModel extends IUserBase{
  findById(id: string): IUser
  generateAuthToken(): string
  updateUser(userData: IUserBase): Promise<void>
}

export interface IUser extends Document, IUserModel {}

const UserSchema: Schema = new Schema({
  userId: { type: Number, required: true, unique: true },
  accessToken: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true, unique: true },
  expires: { type: Number, required: true }
});

UserSchema.statics.findById = async (userId: IUserBase['userId']) => {
  const user = await User.findOne({ userId });
  if (!user) {
    throw new Error('User not found')
  }
  return user
};

UserSchema.methods.updateUser = async (userData: IUserBase): Promise<void> => {
  const user = await User.findById(userData.userId);
  user.accessToken = userData.accessToken;
  user.refreshToken = userData.refreshToken;
  user.expires = userData.expires;
  await user.save();
};

UserSchema.methods.generateAuthToken = function (): string {
  return encodeToken({
    userId: this.userId,
    accessToken: this.accessToken,
    refreshToken: this.refreshToken,
    expires: this.expires
  })
};
export const User = mongoose.model<IUser>('User', UserSchema);

