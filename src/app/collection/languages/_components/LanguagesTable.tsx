import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { LanguageWithCardsType } from '@/server/db/schema';
import LanguageRow from './LanguageRow';

type LanguagesTableProps = {
  languages: LanguageWithCardsType[];
};

export default function LanguagesTable({ languages }: LanguagesTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Language</TableHead>
          <TableHead>Cards #</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {languages.map(({ id, name, cards }) => (
          <LanguageRow
            key={id}
            id={id}
            name={name}
            cardsAmount={cards.length}
          />
        ))}
      </TableBody>
    </Table>
  );
}
