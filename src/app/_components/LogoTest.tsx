// This is a WIP component of a better looking logo

import { cn } from '@/lib/utils';
import Link from 'next/link';

type LogoProps = {
  isExpanded: boolean;
};

export default function Logo({ isExpanded }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('flex-grow text-slate-200', {
        'flex h-12 w-full items-center justify-center text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-500':
          !isExpanded,
      })}
    >
      <div className="flex text-xl font-black text-inherit">
        <div>S</div>
        <div className={cn({ hidden: !isExpanded })}>TAK</div>
      </div>
    </Link>
  );
}
