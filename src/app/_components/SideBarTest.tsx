'use client';

// This is a WIP component of a better looking sidebar

import { UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Gamepad,
  Plus,
  Search,
  Table,
} from 'lucide-react';
import { ReactElement, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type SideBarButtonType = {
  icon: ReactElement;
  text: string;
  url: string;
  key: string;
};

// TODO: find a better way to set icons styles
const sideBarButtons: SideBarButtonType[] = [
  {
    key: 'quick',
    icon: <Gamepad className="stroke-slate-200" />,
    text: 'Quick Run',
    url: '/',
  },
  {
    key: 'mycards',
    icon: <Table className="stroke-slate-200" />,
    text: 'My Cards',
    url: '/',
  },
  {
    key: 'search',
    icon: <Search className="stroke-slate-200" />,
    text: 'Search',
    url: '/',
  },
];

export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={cn(
        'flex h-full w-60 flex-col items-center gap-5 overflow-hidden rounded-lg border border-slate-200 bg-slate-500 shadow-lg shadow-slate-400 transition-all',
        {
          'w-14 p-0': !isExpanded,
          'p-5': isExpanded,
        },
      )}
    >
      <div className="flex w-full items-center justify-between">
        <Logo isExpanded={isExpanded} />

        <button
          className={cn('flex-grow-0 p-2', { hidden: !isExpanded })}
          onClick={() => setIsExpanded(false)}
        >
          <ChevronLeft className="stroke-slate-200" />
        </button>

        {/* Separate to another component */}
        <div
          className={cn('flex flex-grow-0 items-center transition-all', {
            hidden: !isExpanded,
          })}
        >
          <UserButton />
        </div>
      </div>

      <Separator className={cn('transition-all', { 'w-1/2': !isExpanded })} />

      <button
        className={cn({ hidden: isExpanded })}
        onClick={() => setIsExpanded(true)}
      >
        <ChevronRight className="stroke-slate-200" />
      </button>

      <div className="flex h-full w-full flex-col justify-between">
        <ul className="flex w-full flex-col gap-3">
          {sideBarButtons.map((button) => (
            <li className="flex w-full justify-center" key={button.key}>
              <Link
                className={cn(
                  'flex w-full gap-5 rounded-lg p-2 text-slate-200 transition-all hover:bg-slate-400 active:translate-y-1 active:shadow-inner',
                  { 'w-10 justify-center p-2': !isExpanded },
                )}
                href={button.url}
              >
                <div>{button.icon}</div>
                <div className={cn({ hidden: !isExpanded })}>{button.text}</div>
              </Link>
            </li>
          ))}
        </ul>
        <Button className="border border-slate-400 bg-slate-200 text-slate-800 shadow-md hover:text-slate-200">
          <Plus className="mr-2 h-4 w-4" />
          Create Card
        </Button>
      </div>
    </div>
  );
}
