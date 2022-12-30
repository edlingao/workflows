import { redirect, type RequestEvent, type Actions, fail } from "@sveltejs/kit";
import { User } from '$lib/types/user';
import client from '$lib/server/client';
import { encrypt } from '$lib/server/auth';
import { refreshToken } from '$lib/server/auth';
import { UserRegisterResponse } from '$lib/types/user';
import WorkflowsResponseApi from "$lib/server/response";
import {serialize} from 'cookie';

export const GET = (event: RequestEvent) => {
  return Response.redirect(event.url.origin)
}

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
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
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
