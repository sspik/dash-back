import mongoose, {Schema, Document} from 'mongoose';
import {encodeToken} from "../utils";

interface IUserBase {
  userId: number;
  accessToken: string;
  refreshToken: string;
  expires: number;
  yandexMetrikaId?: number;
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
  yandexMetrikaId: { type: Number, required: false, unique: true },
  expires: { type: Number, required: true }
});

UserSchema.statics.findById = async (userId: IUserBase['userId']) => {
  const user = await User.findOne({ userId });
  if (!user) {
    throw new Error('User not found')
  }
  return user
};

UserSchema.methods.updateUser = async function findById (userData: IUser): Promise<void> {
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
    yandexMetrikaId: this.yandexMetrikaId
  })
};
export const User = mongoose.model<IUser>('User', UserSchema);

