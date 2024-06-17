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

type CardsTableProps = {
  cards: CardType[];
  searchText: string;
  languageId: number | null;
};

export default function CardsTable({
  cards,
  searchText,
  languageId,
}: CardsTableProps) {
  const searchTextLowerCase = searchText.toLowerCase();
  const foundCards = cards.filter((card) => {
    const matchBySearch =
      card.front.toLowerCase().includes(searchTextLowerCase) ||
      card.back.toLowerCase().includes(searchTextLowerCase);

    const matchByLanguage = card.languageId === languageId;

    return (
      (languageId && matchBySearch && matchByLanguage) ||
      (!languageId && matchBySearch)
    );
  });

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
          <CardRow id={id} front={front} back={back} key={id} />
        ))}
      </TableBody>
    </Table>
  );
}
