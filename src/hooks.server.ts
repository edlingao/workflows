import { isGuarded } from "$lib/server/guard-routes";
import type { Handle } from "@sveltejs/kit";
import { redirect } from '@sveltejs/kit';

export const handle = (async ({event, resolve}) => {

  const token: string | null = event.cookies.get('auth-x');

  if(isGuarded(event.url) && (!token || token === "")) return redirect(301, `${event.url.origin}/auth/login`);

  return await resolve(event)
}) satisfies Handle;
