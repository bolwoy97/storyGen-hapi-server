import User from "../models/User";
import { IUserRequest } from "../interfaces/User";

export const validate = async (decoded: { id: any; }, req: IUserRequest) => {
  let user = await User.findOne({ _id: decoded.id });
  if (user) {
    req.user = user;
    return { isValid: true };
  } else {
    return { isValid: false };
  }
};
