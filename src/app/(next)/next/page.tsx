/* eslint-disable react/no-unescaped-entities */
'use client';
import { useSession } from 'next-auth/react';

import { HeroForm } from '@/components/form';
import { SignOutButton } from '@/components/sign-out-button';
import { env } from '@/env.mjs';

// const env.NEXT_PUBLIC_API_URL;

const Next = () => {
  const { data: session } = useSession();

  return (
    <section>
      <p>{env.NEXT_PUBLIC_API_URL}</p>
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
      {session && (
        <div>
          <h1>next-equities</h1>
          {session.user && (
            <>
              <p>Session user:</p>
              <p>Name: {session.user.name}</p>
              <p>Email: {session.user.email}</p>
              <p>Image: {session.user.image}</p>
            </>
          )}
        </div>
      )}
      <HeroForm />
      <SignOutButton />
    </section>
  );
};

export default Next;
