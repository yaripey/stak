import { Button } from '@/components/ui/button';
import { Languages, Plus, WalletCards } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-10 pt-5">
      <Link href="/create/card">
        <Button className="box-content h-64 w-60 rounded-3xl border-b-8 border-b-amber-800 bg-amber-700 p-1 transition-all hover:-translate-y-2 hover:rotate-3 hover:bg-amber-500">
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-3xl border-2 border-dashed border-white">
            <div className="flex items-center justify-center gap-2">
              <Plus size={50} />
              <WalletCards size={66} />
            </div>
            <div className="text-3xl font-bold">New card</div>
          </div>
        </Button>
      </Link>
      <Link href="/create/language">
        <Button className="box-content h-64 w-60 rounded-3xl border-b-8 border-b-cyan-800 bg-cyan-700 p-1 transition-all hover:-translate-y-2 hover:-rotate-2 hover:bg-cyan-500">
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-3xl border-2 border-dashed border-white">
            <div className="flex items-center justify-center gap-2">
              <Plus size={50} />
              <Languages size={66} />
            </div>
            <div className="text-3xl font-bold">New language</div>
          </div>
        </Button>
      </Link>
    </div>
  );
}
