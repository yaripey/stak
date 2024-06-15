import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';
import Link from 'next/link';

type CardRowsActionsProps = {
  cardId: number;
  deleteCard: () => void;
};

export default function CardRowActions({
  deleteCard,
  cardId,
}: CardRowsActionsProps) {
  return (
    <div className="flex items-center justify-end gap-3">
      <Link href={`/edit/${cardId}`}>
        <Button variant="outline" size="icon">
          <Pencil size={16} />
        </Button>
      </Link>

      <form action={deleteCard}>
        <Button type="submit" variant="destructive" size="icon">
          <Trash size={16} />
        </Button>
      </form>
    </div>
  );
}
