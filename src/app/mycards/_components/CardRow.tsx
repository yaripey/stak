import { TableCell, TableRow } from '@/components/ui/table';
import CardRowActions from './CardRowActions';

type CardRowProps = {
  front: string;
  back: string;
};

export default function CardRow({ front, back }: CardRowProps) {
  return (
    <TableRow>
      <TableCell>{front}</TableCell>
      <TableCell>{back}</TableCell>
      <TableCell className="text-right">
        <CardRowActions />
      </TableCell>
    </TableRow>
  );
}
