import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from "../controllers/users.controller";

export default [
  {
    method: "POST",
    path: "/users",
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
