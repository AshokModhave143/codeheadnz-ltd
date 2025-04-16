import { authOptions } from '@app/api/util/authOptions';
import NextAuth from 'next-auth';
declare module 'next-auth' {
  interface Session {
    accessToken?: unknown;
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
