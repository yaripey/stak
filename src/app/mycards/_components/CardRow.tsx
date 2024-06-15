import { TableCell, TableRow } from '@/components/ui/table';

type CardRowProps = {
  front: string;
  back: string;
};

export default function CardRow({ front, back }: CardRowProps) {
  return (
    <TableRow>
      <TableCell>{front}</TableCell>
      <TableCell>{back}</TableCell>
      <TableCell className="text-right">Actions</TableCell>
    </TableRow>
  );
}
