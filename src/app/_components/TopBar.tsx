import { UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Library, PencilLine } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TopBar() {
  const defaultButtonStyles =
    'box-content rounded-2xl border-b-4 transition-all';
  return (
    <div className="flex w-full items-center justify-between border-b-4 border-blue-200 bg-blue-100 p-5">
      <Logo />

      <div className="flex items-center gap-5">
        <Link href="/collection">
          <Button
            className={cn(
              defaultButtonStyles,
              'border-orange-400 bg-orange-300 hover:-rotate-6 hover:scale-105 hover:bg-orange-200',
            )}
            size="icon"
          >
            <Library className="stroke-orange-600" />
          </Button>
        </Link>

        <Link href="/create/card">
          <Button
            className={cn(
              defaultButtonStyles,
              'border-green-400 bg-green-300 hover:rotate-6 hover:scale-105 hover:bg-green-200',
            )}
            size="icon"
          >
            <PencilLine className="stroke-green-600" />
          </Button>
        </Link>

        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: 40,
                height: 40,
                borderWidth: 4,
                borderColor: 'grey',
                transition: 'all',
              },
            },
          }}
        />
      </div>
    </div>
  );
}
