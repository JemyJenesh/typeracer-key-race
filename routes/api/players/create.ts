import { HandlerContext } from "$fresh/server.ts";

export const handler = (req: Request, _ctx: HandlerContext): Response => {
  return new Response(req.body);
  // const randomIndex = Math.floor(Math.random() * JOKES.length);
  // const body = JOKES[randomIndex];
  // return new Response(body);
};
