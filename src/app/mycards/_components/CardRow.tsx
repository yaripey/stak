import { TableCell, TableRow } from '@/components/ui/table';
import CardRowActions from './CardRowActions';

type CardRowProps = {
  id: number;
  front: string;
  back: string;
  deleteCard: () => void;
};

export default function CardRow({ id, front, back, deleteCard }: CardRowProps) {
  return (
    <TableRow>
      <TableCell>{front}</TableCell>
      <TableCell>{back}</TableCell>
      <TableCell className="text-right">
        <CardRowActions deleteCard={deleteCard} cardId={id} />
      </TableCell>
    </TableRow>
  );
}
