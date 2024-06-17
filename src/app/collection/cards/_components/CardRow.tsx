import { TableCell, TableRow } from '@/components/ui/table';
import CardRowActions from './CardRowActions';

type CardRowProps = {
  id: number;
  front: string;
  back: string;
};

export default function CardRow({ id, front, back }: CardRowProps) {
  return (
    <TableRow>
      <TableCell>{front}</TableCell>
      <TableCell>{back}</TableCell>
      <TableCell className="text-right">
        <CardRowActions cardId={id} />
      </TableCell>
    </TableRow>
  );
}
