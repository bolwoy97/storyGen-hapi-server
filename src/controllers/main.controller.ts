import { Request } from "@hapi/hapi";

export function index(request: Request): string {
  console.log("Processing request", request.info.id);
  return "Welcome to StoryGen!";
}
