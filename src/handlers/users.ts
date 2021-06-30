import { Request } from "@hapi/hapi";

export function index(req: Request): string {
  console.log("Processing request", req.info.id);
  return "See our users";
}

export function getName(req: Request): string {
  console.log("Processing request", req.info.id);
  return `Hello , ${req.params.name}`;
}
