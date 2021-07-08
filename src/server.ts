'use strict';

import * as Hapi from "@hapi/hapi";
import * as glob from "glob";
import * as path from "path";
import * as config from "./config";
import * as AuthValidator from "./validators/auth";

const hapi_auth_jwt = require('hapi-auth-jwt2');

export let server: Hapi.Server;

export const init = async function(): Promise<Hapi.Server> {
  server = Hapi.server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  });

  server.register(hapi_auth_jwt);
  server.auth.strategy('jwt', 'jwt', {
    key: config.jwtKey,
    validate: AuthValidator.validate,
    verifyOptions: { algorithms: ['HS256'] }
  });
  server.auth.default('jwt');

  glob.sync('build/routes/*.js', {
    root: __dirname
  }).forEach(file => {
    const routes = require(path.join(__dirname + "/..", file)).default;
    server.route(routes);
  });

  return server;
};

export const start = async function(): Promise<void> {
  return server.start().then(() => {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
  });;
};

process.on('unhandledRejection', (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});
