'use client';

import { LanguageWithCardsType } from '@/server/db/schema';
import LanguagesTable from './LanguagesTable';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type LanguagesCollectionProps = {
  languages: LanguageWithCardsType[];
};

export default function LanguagesCollection({
  languages,
}: LanguagesCollectionProps) {
  if (languages.length === 0) return (
    <div className="pt-5 flex justify-center flex-col items-center gap-2">
      <p className="text-lg">You have no languages yet.</p>
      <Link href="/create/language"><Button>Create a new language</Button></Link>
    </div>
  )
  return (
    <div>
      <LanguagesTable languages={languages} />
    </div>
  );
}
