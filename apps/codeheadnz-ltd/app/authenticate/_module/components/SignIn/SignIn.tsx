'use client';

import { Button, Divider } from '@heroui/react';
import { signIn } from 'next-auth/react';

export const SignIn = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Sign In</h1>
      <p className="mt-4 text-lg">Welcome back! Please sign in to continue.</p>
      <Divider />
      <div>
        <Button variant="solid" onPress={() => signIn('google')}>
          Sign in with google
        </Button>
      </div>
    </div>
  );
};
