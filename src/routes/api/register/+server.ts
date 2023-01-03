import { type RequestEvent } from "@sveltejs/kit";
import { User } from '$lib/types/user';
import client from '$lib/server/client';
import { encrypt } from '$lib/server/auth';
import { refreshToken } from '$lib/server/auth';
import { UserRegisterResponse } from '$lib/types/user';
import WorkflowsResponseApi from "$lib/server/response";

export const POST = async (event: RequestEvent) => {
  const {
    name,
    password,
    email
  } = await (event.request.json()) as User;
  

  try {
    const encryptedPassword = await encrypt(password);
    
    const user = await client.user.create({
      data: {
        name,
        password: encryptedPassword,
        email
      }
    });
    const token = refreshToken(user.id);
    const body: UserRegisterResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    const response = WorkflowsResponseApi({
      body,
      cookie: {
        key: 'auth-x',
        value: token,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // one week
      }
    });

    return response; 
  } catch(error) {
    console.log(error);
    return WorkflowsResponseApi({
      body: {
        error
      },
      status: 500
    })
  }
}
