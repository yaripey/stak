import { UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import Link from 'next/link';
import { Gamepad, Plus, Search, Table } from 'lucide-react';
import { ReactElement } from 'react';
import { Button } from '@/components/ui/button';

type SideBarButtonType = {
  icon: ReactElement;
  text: string;
  url: string;
  key: string;
};

const sideBarButtons: SideBarButtonType[] = [
  {
    key: 'quick',
    icon: <Gamepad />,
    text: 'Quick Run',
    url: '/',
  },
  {
    key: 'mycards',
    icon: <Table />,
    text: 'My Cards',
    url: '/',
  },
  {
    key: 'search',
    icon: <Search />,
    text: 'Search',
    url: '/',
  },
];

export default function SideBar() {
  return (
    <div className="flex h-full w-60 flex-col gap-5 border-r-2 border-slate-200 px-5">
      <div className="flex justify-between">
        <Logo />
        <UserButton />
      </div>
      <div className="flex h-full flex-col justify-between">
        <ul className="flex flex-col gap-3">
          {sideBarButtons.map((button) => (
            <li
              className="flex cursor-pointer gap-3 rounded-lg p-2 transition-all hover:-translate-y-1 hover:shadow-md active:translate-y-1 active:shadow-inner"
              key={button.key}
            >
              <div>{button.icon}</div>
              <Link href={button.url}>{button.text}</Link>
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
