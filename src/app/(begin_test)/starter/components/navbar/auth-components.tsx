import { signIn, signOut } from 'auth';

import { Button } from '@/components/ui/button';

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn(provider);
  };

  return (
    <form onSubmit={handleSignIn}>
      <Button type="submit" {...props}>
        Sign In
      </Button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  const handleSignOut = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signOut();
  };

  return (
    <form onSubmit={handleSignOut} className="w-full">
      <Button type="submit" variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  );
}
