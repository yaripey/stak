import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';

export default function NotSignedPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <h3 className="text-xl">
        Welcome to <b>STAK</b>.
      </h3>
      <p>
        Unfortunately you are not signed in. Click the button below to Login or
        Register.
      </p>
      <SignInButton>
        <Button className="border border-slate-100 bg-slate-400 shadow-md transition-all hover:-translate-y-1 hover:cursor-pointer hover:border active:translate-y-0">
          Sign In
        </Button>
      </SignInButton>
    </div>
  );
}
