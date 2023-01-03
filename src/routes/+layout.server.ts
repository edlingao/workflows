import type { LayoutServerLoad } from './$types';
import { isGuarded } from '$lib/server/guard-routes';
import { userFromToken } from '$lib/server/auth';

export const load = (async (event) => {
  const {url} = event;
  const token = event.cookies.get('auth-x');
  const user = token ?  await userFromToken(token) : null;

  return {
    isPublic: !isGuarded(url),
    user,
  }
}) satisfies LayoutServerLoad