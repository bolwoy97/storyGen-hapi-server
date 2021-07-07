import { IUser } from "../models/User";

export interface IUserRequest extends Request {
  user: IUser
}
