'use client';

import { useSession } from 'next-auth/react';

import { SignInButton } from '@/components/sign-in-button';
import { UserAccountNav } from '@/components/user-account-nav';

const UserNav = () => {
  const { status, data: session } = useSession();
  //   const userEmail = session?.user?.email;

  return (
    <div className="flex items-center space-x-4">
      {status === 'authenticated' && session && session.user && (
        <UserAccountNav
          user={{
            name: session.user.name,
            image: session.user.image,
            email: session.user.email,
          }}
        />
      )}
      {status === 'unauthenticated' && <SignInButton />}
    </div>
  );
};

export default UserNav;
