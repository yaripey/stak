'use client';

import { CardType } from '@/server/db/schema';
import CardSearch from './CardSearch';
import CardsTable from './CardsTable';
import { useState } from 'react';

type CardsCollectionProps = {
  cards: CardType[];
};

export default function CardsCollection({ cards }: CardsCollectionProps) {
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <CardSearch
        searchText={searchText}
        setSearchText={(newText) => setSearchText(newText)}
      />
      <CardsTable cards={cards} searchText={searchText} />
    </div>
  );
}
