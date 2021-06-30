'use strict';
import { index, getName } from "../handlers/users";

export default [
  { method: 'GET', path: '/users', handler: index },
  { method: 'GET', path: '/users/{name}', handler: getName }
];
