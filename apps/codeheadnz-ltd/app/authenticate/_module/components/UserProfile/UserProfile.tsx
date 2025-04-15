'use client';

import { useSession } from 'next-auth/react';

export const UserProfile = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      {session.user?.image && <img src={session.user.image} alt="User Image" />}
    </div>
  );
};
