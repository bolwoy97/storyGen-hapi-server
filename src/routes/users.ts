'use strict';

import { ServerRoute } from "@hapi/hapi";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from "../controllers/users.controller";

import { createUserSchema } from "../validators/users";

export default <ServerRoute[]>[
  {
    method: "POST",
    path: "/users",
    config: {
      auth: false,
      validate: {
        payload: createUserSchema
      }
    },
    handler: createUser
  },
  {
    method: "GET",
    path: "/users",
    handler: getUsers
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: getUser
  },
  {
    method: "PUT",
    path: "/users/{id}",
    handler: updateUser
  },
  {
    method: "DELETE",
    path: "/users/{id}",
    handler: deleteUser
  }
]
