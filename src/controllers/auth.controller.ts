import { Request, ResponseToolkit } from "@hapi/hapi";
import User from "../models/User";
import { createToken } from "../util/jwt";
import * as bcrypt from "bcrypt";
import boom = require('boom');

export async function login(req: Request, h: ResponseToolkit) {
  try {
    let { username, password }: { username: string, password: string } = <{ username: string, password: string }>req.payload;
    let user = await User.findOne({
      username
    });
    let validUser = user && (await bcrypt.compareSync(password, user.password));

    if (validUser) {
      let token = createToken(user);
      console.log('token' + token);
      return { token };
    } else {
      return boom.unauthorized('incorrect pass');
    }
  } catch (err) {
    return boom.unauthorized(err);
  }
}
