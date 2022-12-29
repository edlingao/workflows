import { SECRET, JWT_SECRET } from '$env/static/private';
import type { User } from '@prisma/client';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import client from '$lib/server/client';
import { User } from '$lib/types/user';
import type { RequestEvent } from '@sveltejs/kit';

export async function compare(encrypted: string, password: string): boolean {
  return await encrypt(password) === encrypted;
}

export function encrypt(password: string): Promise<string> {
  return new Promise<string>((res, rej) => {
    crypto.scrypt(password, SECRET, 32, (error, buffer) => {
      if(error) rej(error);

      res(buffer.toString("base64"));
    })
  })
}

export function refreshToken(userId: string): string {
  return jwt.sign(userId, JWT_SECRET)
}

export async function userFromToken(token: string): Promise<User> {
  const userId = jwt.verify(token, JWT_SECRET);

  try {
    const user = await client.user.findUnique({
      where: {
        id: userId
      }
    });

    client.$disconnect();
    return user;
  } catch(error) {
    console.log(error)
    return error;
  }
}

export function setCookies(request: RequestEvent, userId: string): RequestEvent {
  request.cookies.set('auth-x', refreshToken(userId));

  return request;
}

export async function register({name, email, password}: User) {
  try {
    const encryptedPassword = encrypt(password);

    const user = await client.user.create({
      data: {
        name,
        email,
        password: encryptedPassword,
      }
    })
    client.$disconnect();
    return user;
  } catch(error) {
    console.log(error)
    return error
  }
}


export async function login({email, password}: {email: string, password: string}) {
  try {
    const user = await client.user.findUnique({
      where: {
        email,
      }
    })

    if(compare(user?.password, password)) {
      client.$disconnect()
      return refreshToken(user?.id);
    }

    throw "Not found"
  } catch(error) {
    console.log(error);
    return error;
  }
}

export async function logout(request: RequestEvent) {
  request.cookies.delete('auth-x');
}