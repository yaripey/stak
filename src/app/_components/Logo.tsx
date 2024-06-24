import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      className="flex h-14 w-24 -rotate-6 items-center justify-center rounded-2xl border-b-4 border-yellow-800 bg-yellow-600 text-xl font-black text-white transition-all hover:rotate-6 hover:scale-110 hover:bg-yellow-500"
      href="/"
    >
      STAK
    </Link>
  );
}
