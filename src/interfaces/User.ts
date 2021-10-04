import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  fullname: string;
  password: string;
  comparePassword: (password: string) => Promise<Boolean>;
  isAdmin: boolean
}

export interface IUserRequest extends Request {
  user: IUser
}
