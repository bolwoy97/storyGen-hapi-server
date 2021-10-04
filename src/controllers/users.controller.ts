import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import User from "../models/User";
import { IUser } from "../interfaces/User";

export const createUser = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    let user = await User.findOne({ username: (request.payload as IUser).username });
    if (user){
      return h.response('User already exist').code(400);
    }
    user = new User(request.payload);
    const userSaved = await user.save();
    return h.response(userSaved);
  } catch (error) {
    return h.response(error).code(500);
  }
};

export const getUsers = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const users = await User.find();
    return h.response(users);
  } catch (error) {
    return h.response(error).code(500);
  }
};

export const getUser = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const userfound = await User.findById(request.params.id);
    if (userfound) {
      return h.response(userfound);
    }
    return h.response().code(404);
  } catch (error) {
    return h.response(error).code(500);
  }
};

export const updateUser = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      request.params.id,
      <IUser>request.payload,
      // new User(request.payload),
      { new: true }
    );
    if (updatedUser) {
      return h.response(updatedUser);
    }
    return h.response().code(404);
  } catch (error) {
    return h.response(error).code(500);
  }
};

export const deleteUser = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const deletedUser = await User.findByIdAndDelete(request.params.id);
    if (deletedUser) {
      return h.response(deletedUser);
    }
    return h.response().code(404);
  } catch (error) {
    return h.response(error).code(500);
  }
};
