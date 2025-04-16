import { getServerSession } from 'next-auth';
import { SignIn } from './_module/components/SignIn';
import { redirect } from 'next/navigation';
import { authOptions } from '@app/api/util/authOptions';

export default async function AuthenticatePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return <SignIn />;
}
