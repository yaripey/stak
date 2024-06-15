import { UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="flex h-14 w-full items-center justify-between">
      <Logo />

      <div className="flex items-center gap-5">
        <Link href="/mycards">
          <Button>My Cards</Button>
        </Link>
        <Link href="/create">
          <Button>New Card</Button>
        </Link>
        <UserButton />
      </div>
    </div>
  );
}
