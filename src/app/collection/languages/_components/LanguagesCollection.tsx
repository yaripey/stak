'use client';

import { LanguageWithCardsType } from '@/server/db/schema';
import LanguagesTable from './LanguagesTable';

type LanguagesCollectionProps = {
  languages: LanguageWithCardsType[];
};

export default function LanguagesCollection({
  languages,
}: LanguagesCollectionProps) {
  return (
    <div>
      <LanguagesTable languages={languages} />
    </div>
  );
}
