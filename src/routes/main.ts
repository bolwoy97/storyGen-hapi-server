'use strict';

import { ServerRoute } from "@hapi/hapi";
import { index } from "../controllers/main.controller";

export default <ServerRoute[]>[
  { method: 'GET', path: '/', handler: index },
];
