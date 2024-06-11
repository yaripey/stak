import { UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

export default function TopBar() {
  return (
    <div className="flex h-14 w-full items-center justify-between">
      <Logo />

      <div className="flex items-center gap-5">
        <Button>New Card</Button>
        <UserButton />
      </div>
    </div>
  );
}
