import { isGuarded } from "$lib/server/guard-routes";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({event, resolve}) => {

  const token: string | null = event.cookies.get('x-auth');
  
  if(isGuarded(event.url) && !token) return Response.redirect(`${event.url.origin}/users/login`, 301)

  return await resolve(event)
}) satisfies Handle;
