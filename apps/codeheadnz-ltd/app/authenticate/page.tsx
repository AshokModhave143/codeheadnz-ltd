import { getServerSession } from 'next-auth';
import { SignIn } from './_module/components/SignIn';
import { authOptions } from '@app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { UserProfile } from './_module/components/UserProfile';

export default async function AuthenticatePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return session ? <SignIn /> : <UserProfile />;
}
