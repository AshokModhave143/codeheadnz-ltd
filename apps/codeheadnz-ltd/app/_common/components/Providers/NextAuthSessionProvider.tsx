'use client';

import { authOptions } from '@app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export const NextAuthSessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //   const session = getServerSession(authOptions);

  return <SessionProvider>{children}</SessionProvider>;
};
