'use client';

import { MainNav } from './starter/components/navbar/mainnav';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full">
      <MainNav />
      {children}
    </div>
  );
}
