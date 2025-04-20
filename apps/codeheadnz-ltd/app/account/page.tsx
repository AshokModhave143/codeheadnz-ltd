'use client';

import { navConfig } from '@common/config';
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

export default function AccountPage() {
  const { data: session } = useSession();

  if (session === null) {
    redirect('/');
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Account</h1>
      <p className="text-lg text-gray-500">
        Manage your account settings and preferences.
      </p>

      <Card className="w-[460px] mx-auto">
        <CardHeader className="justify-between">
          <User
            avatarProps={{ src: session?.user?.image || '' }}
            name={session?.user?.name}
            description={session?.user?.email}
            className="py-2"
          />
          <Button
            as={Link}
            variant="solid"
            color="primary"
            href={
              navConfig.navLinks.find((link) => link.label === 'Profile')?.href
            }
          >
            Go to Profile
          </Button>
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
    </div>
  );
}
