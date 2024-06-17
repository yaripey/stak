'use client';

import { CardType, LanguageType } from '@/server/db/schema';
import CardSearch from './CardSearch';
import CardsTable from './CardsTable';
import { useState } from 'react';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from '@/components/ui/select';
import { useSearchParams } from 'next/navigation';

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
      <div className="flex gap-4">
        <Select
          defaultValue={languageId?.toString()}
          onValueChange={(newLanguageId) =>
            setLanguageId(parseInt(newLanguageId))
          }
        >
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((language) => (
              <SelectItem key={language.id} value={language.id.toString()}>
                {language.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
