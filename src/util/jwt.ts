
'use strict';

const jwt = require('jsonwebtoken');
import * as config from '../config';
import { IUser } from '../models/User';

function createToken(user: IUser) {
  let scopes;
  if (user.isAdmin) {
    scopes = 'admin';
  }
  return jwt.sign({ id: user._id, username: user.username, scope: scopes }, config.jwtKey, { algorithm: 'HS256', expiresIn: "1h" });
}

module.exports = createToken;
