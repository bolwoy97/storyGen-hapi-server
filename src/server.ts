'use strict';

import * as Hapi from "@hapi/hapi";
import { Request, Server } from "@hapi/hapi";
import * as glob from "glob";
import * as path from "path";

export let server: Server;

export const init = async function(): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  });

  //server.route(routes);
  glob.sync('build/api/**/routes/*.js', {
    root: __dirname
  }).forEach(file => {
    const routes = require(path.join(__dirname + "/..", file));
    routes.default.forEach((route: Hapi.ServerRoute | Hapi.ServerRoute[]) => {
      server.route(route);
    });
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
