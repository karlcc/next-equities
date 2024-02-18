// import { notFound } from 'next/navigation';

import { MainNav } from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { SignInButton } from '@/components/sign-in-button';
// import { UserAccountNav } from '@/components/user-account-nav';
import { heroConfig } from '@/config/dashboard';
// import { getCurrentUser } from '@/lib/session';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const user = await getCurrentUser();

  // if (!user) {
  //   return notFound();
  // }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="bg-background sticky top-0 z-40 border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center">
            <MainNav items={heroConfig.mainNav} />
          </div>
          <div className="flex items-center">
            <ModeToggle />
            {/* {user ? (
              <UserAccountNav
                user={{
                  name: user.name,
                  image: user.image,
                  email: user.email,
                }}
              />
            ) : (
              <SignInButton />
            )} */}
            <SignInButton />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
