
'use strict';

const jwt = require('jsonwebtoken');
import * as config from '../config';
import { IUser } from '../models/User';

export function createToken(user: IUser) {
  let scopes;
  if (user.isAdmin) {
    scopes = 'admin';
  }
  return jwt.sign({ id: user._id }, config.jwtKey, { algorithm: 'HS256', expiresIn: "1h" });
}
createToken;
