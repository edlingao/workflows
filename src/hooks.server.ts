import { isGuarded } from "$lib/server/guard-routes";
import type { Handle } from "@sveltejs/kit";
import { redirect } from '@sveltejs/kit';
import { parse } from 'cookie';

export const handle = (async ({event, resolve}) => {
  const cookies: {['auth-x']: string | null} = parse(event.request.headers.get('cookie'));

  const token: string | null = cookies['auth-x'];

  if(isGuarded(event.url) && (!token || token === "")) {
    // return redirect(302, new URL('/auth/login', event.url.origin))
    return new Response(null, {
      status: 302,
      headers: { location: '/auth/login' }
    })
  }

  return await resolve(event)
}) satisfies Handle;
