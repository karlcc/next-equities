import UserNav from './components/user-nav';

import { MainNav } from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { nextConfig } from '@/config/dashboard';

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
            <MainNav items={nextConfig.mainNav} />
          </div>
          <div className="flex items-center">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container mx-auto flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
