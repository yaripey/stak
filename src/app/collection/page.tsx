import { Button } from '@/components/ui/button';
import { Languages, WalletCards } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex w-full justify-center gap-10 pt-5">
      <Link href="/collection/cards">
        <Button className="box-content h-64 w-60 rounded-3xl border-b-8 border-b-amber-800 bg-amber-700 p-1 transition-all hover:-translate-y-2 hover:rotate-3 hover:bg-amber-500">
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-3xl border-2 border-dashed border-white">
            <WalletCards size={66} />
            <div className="text-3xl font-bold">Cards</div>
          </div>
        </Button>
      </Link>
      <Link href="/collection/languages">
        <Button className="box-content h-64 w-60 rounded-3xl border-b-8 border-b-cyan-800 bg-cyan-700 p-1 transition-all hover:-translate-y-2 hover:-rotate-2 hover:bg-cyan-500">
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-3xl border-2 border-dashed border-white">
            <Languages size={66} />
            <div className="text-3xl font-bold">Languages</div>
          </div>
        </Button>
      </Link>
    </div>
  );
}
