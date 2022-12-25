import client from '$lib/server/client';
import { PageData } from './$types';

export async function load() {
  const users = await client.user.findMany()

  const data: PageData = {
    users
  };

  client.$disconnect();

  return data;
}