'use strict';
import { Request } from "@hapi/hapi";

function index(request: Request): string {
  console.log("Processing request", request.info.id);
  return "Hello! Nice to have met you.";
}

export default [
  { method: 'GET', path: '/', handler: index },
];
