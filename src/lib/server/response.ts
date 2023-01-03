import { serialize } from 'cookie';
interface Header {
  [x: string]: string | number | boolean;
}

interface Body {
  [x: string]: string | number | boolean | Body;
}

interface Cookie {
  value: string;
  key: string;
  path: string;
  httpOnly: boolean;
  secure: boolean;
  maxAge: number;
  sameSite: string;
}

export interface WorkflowProps {
  headers: Header;
  body: Body;
  status: number;
  cookie: Cookie;
};

export default function WorkflowsResponseApi({
  headers,
  status = 200,
  body = {},
  cookie = {},
}: WorkflowProps) {
  const serializedCookie = cookie ?
    serialize(cookie.key, cookie.value, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: cookie.secure || process.env.NODE_ENV === 'production',
      maxAge: cookie.maxAge || 60 * 60 * 24 * 7,
    }) :
    '';

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      'Set-Cookie': serializedCookie,
    }
  })
}
