'use client';

import { navConfig } from '@common/components/Header';
import { LoadingSpinner } from '@common/components/LoadingSpinner';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  User,
} from '@heroui/react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export const UserProfile = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'unauthenticated') {
    return <UnAuthProfile />;
  }

  if (!session) {
    redirect('/');
  }

  return (
    <Card className="w-[460px] mx-auto">
      <CardHeader className="justify-between">
        <User
          avatarProps={{ src: session?.user?.image || '' }}
          name={session?.user?.name}
          description={session?.user?.email}
          className="py-2"
        />
        <Link
          color="primary"
          href={
            navConfig.navLinks.find((link) => link.label === 'Profile')?.href
          }
        >
          Go to Profile
        </Link>
      </CardHeader>
      <Divider />
      <CardBody className="px-3 py-2 text-small text-default-400 gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-white">
            Profile Information
          </h3>
          <div className="flex flex-col gap-2 bg-gray-200 p-4 rounded-lg">
            <p>Name: {session?.user?.name}</p>
            <p>Email: {session?.user?.email}</p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
  );
};

const UnAuthProfile = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Unauthorized</h1>
          <p className="py-6">
            You are not authorized to view this page. Please log in to continue.
          </p>
        </div>
      </div>
    </div>
  );
};
