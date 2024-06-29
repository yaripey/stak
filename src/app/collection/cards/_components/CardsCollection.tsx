'use client';

import { CardType, LanguageType } from '@/server/db/schema';
import CardSearch from './CardSearch';
import CardsTable from './CardsTable';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import LanguageSelector from '@/app/_components/LanguageSelector';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CardsCollectionProps = {
  cards: CardType[];
  languages: LanguageType[];
};

export default function CardsCollection({
  cards,
  languages,
}: CardsCollectionProps) {
  const initLanguageId = parseInt(useSearchParams().get('languageId') ?? '');
  const doesLanguageExist = languages.some(
    (language) => language.id === initLanguageId,
  );
  const [searchText, setSearchText] = useState('');
  const [languageId, setLanguageId] = useState<number | undefined>(
    doesLanguageExist ? initLanguageId : undefined,
  );

  if (cards.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-2 pt-5">
        <p className="text-lg">You have no cards yet.</p>
        <Link href="/create/card">
          <Button>Create a new card</Button>
        </Link>
      </div>
    );

  return (
    <div>
      <div className="mb-14 flex h-20 flex-wrap gap-4 p-5">
        <LanguageSelector
          languages={languages}
          languageId={languageId}
          setLanguageId={(newId) =>
            setLanguageId(newId === undefined ? newId : parseInt(newId))
          }
          clearButton
        />
        <CardSearch
          searchText={searchText}
          setSearchText={(newText) => setSearchText(newText)}
        />
      </div>
      <CardsTable
        cards={cards}
        searchText={searchText}
        languageId={languageId}
      />
    </div>
  );
}
