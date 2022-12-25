import type { LayoutServerLoad } from './$types';
import { isGuarded } from '../lib/server/guard-routes';

export const load = (async ({url}) => {

  return {
    isPublic: !isGuarded(url)
  }
}) satisfies LayoutServerLoad