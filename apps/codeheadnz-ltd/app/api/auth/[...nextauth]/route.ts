import NextAuth from 'next-auth';
import { authOptions } from '@app/api/util/authOptions';

declare module 'next-auth' {
  interface Session {
    accessToken?: unknown;
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
