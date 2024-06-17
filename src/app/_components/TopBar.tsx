import { UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="flex h-14 w-full items-center justify-between">
      <Logo />

      <div className="flex items-center gap-5">
        <Link href="/collection/cards">
          <Button>My Cards</Button>
        </Link>
        <Link href="/collection/languages">
          <Button>My Languages</Button>
        </Link>
        <Link href="/create/card">
          <Button>New Card</Button>
        </Link>
        <Link href="/create/language">
          <Button>New Language</Button>
        </Link>
        <UserButton />
      </div>
    </div>
  );
}
