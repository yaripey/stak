'use client';

import { CardType, LanguageType } from '@/server/db/schema';
import CardSearch from './CardSearch';
import CardsTable from './CardsTable';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import LanguageSelector from '@/app/_components/LanguageSelector';

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
  const [languageId, setLanguageId] = useState<number | null>(
    doesLanguageExist ? initLanguageId : null,
  );

  return (
    <div>
      <div className="mb-14 flex h-20 flex-wrap gap-4 p-5">
        <LanguageSelector
          languages={languages}
          languageId={languageId}
          setLanguageId={(newId) => setLanguageId(newId)}
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
