import { TableCell, TableRow } from '@/components/ui/table';
import LanguageRowActions from './LanguageRowActions';

type LanguageRowProps = {
  id: number;
  name: string;
  cardsAmount: number;
};

export default function LanguageRow({
  id,
  name,
  cardsAmount,
}: LanguageRowProps) {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{cardsAmount}</TableCell>
      <TableCell>
        <LanguageRowActions languageId={id} />
      </TableCell>
    </TableRow>
  );
}
