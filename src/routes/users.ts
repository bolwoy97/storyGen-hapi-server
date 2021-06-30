'use strict';
import { Request } from "@hapi/hapi";

function index(request: Request): string {
  console.log("Processing request", request.info.id);
  return "See our users";
}

export default [
  { method: 'GET', path: '/users', handler: index },
  { method: 'GET', path: '/users/{id}', handler: index }
];
