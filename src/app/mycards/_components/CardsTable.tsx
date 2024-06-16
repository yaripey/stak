'use client';

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CardType } from '@/server/db/schema';
import CardRow from './CardRow';
import { deleteCard } from '@/server/queries';
import { revalidatePath } from 'next/cache';

type CardsTableProps = {
  cards: CardType[];
  searchText: string;
};

export default function CardsTable({ cards, searchText }: CardsTableProps) {
  const searchTextLowerCase = searchText.toLowerCase();
  const foundCards = cards.filter(
    (card) =>
      card.front.toLowerCase().includes(searchTextLowerCase) ||
      card.back.toLowerCase().includes(searchTextLowerCase),
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Front</TableHead>
          <TableHead>Back</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {foundCards.map(({ front, back, id }) => (
          <CardRow
            id={id}
            front={front}
            back={back}
            key={id}
            deleteCard={async () => {
              await deleteCard(id);
              revalidatePath('/mycards');
            }}
          />
        ))}
      </TableBody>
    </Table>
  );
}
