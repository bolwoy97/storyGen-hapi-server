'use strict';

import * as Hapi from "@hapi/hapi";
import { Request, Server } from "@hapi/hapi";

import routes from './routes'

export let server: Server;

export const init = async function(): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  });

  server.route(routes);

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
