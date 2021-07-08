'use strict';

import { ServerRoute } from "@hapi/hapi";
import { login } from "../controllers/auth.controller";

export default <ServerRoute[]>[
  <ServerRoute>{
    method: 'POST',
    path: '/login',
    config: { auth: false },
    handler: login
  },
];
