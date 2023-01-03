import type { RequestEvent } from "@sveltejs/kit";
import client from '$lib/server/client';
import WorkflowsResponseApi from '../../../lib/server/response';
import { compare, encrypt } from "$lib/server/auth";
import { refreshToken } from '../../../lib/server/auth';

export const POST = async (event: RequestEvent) => {
  const {
    password,
    email
  } = await (event.request.json()) as User;
  
  try {
    const user = await client.user.findUnique({
      where: {
        email
      }
    })

    const token = refreshToken(user?.id);

    if(await compare(user?.password, password)) {
      return WorkflowsResponseApi({
        body: {
          user: {
            email: user?.email,
            name: user?.name
          },
          token,
        },
        cookie: {
          key: 'auth-x',
          value: token,
          path: '/',
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7, // one week
        }
      })
    }

    throw Error('Wrong credentials')

  } catch(error) {
    console.log(error);
    return WorkflowsResponseApi({
      body: {
        message: {
          error
        }
      },
      status: 500
    })
  }
};
