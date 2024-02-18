import { auth } from 'auth';
import Link from 'next/link';

import { SignInButton } from '@/app/(begin_test)/starter/components/navbar/sign-in-button';
import { ThemeToggle } from '@/app/(begin_test)/starter/components/navbar/theme-toggle';
import UserButton from '@/app/(begin_test)/starter/components/navbar/user-button';

export const Navbar = async () => {
  const session = await auth();

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold">
          next-equities
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {session ? <UserButton /> : <SignInButton />}
        </div>
      </div>
    </header>
  );
};
