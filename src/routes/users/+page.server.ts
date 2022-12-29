import client from '$lib/server/client';
export async function load() {
  const users = await client.user.findMany()

  const data = {
    users,
  };

  client.$disconnect();

  return data;
}