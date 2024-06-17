import { Button } from '@/components/ui/button';
import { deleteCardAction } from '@/server/actions/cards';
import { Pencil, Trash } from 'lucide-react';
import Link from 'next/link';

type CardRowsActionsProps = {
  cardId: number;
};

export default function CardRowActions({ cardId }: CardRowsActionsProps) {
  return (
    <div className="flex items-center justify-end gap-3">
      <Link href={`/edit/card/${cardId}`}>
        <Button variant="outline" size="icon">
          <Pencil size={16} />
        </Button>
      </Link>

      <form action={() => deleteCardAction(cardId)}>
        <Button type="submit" variant="destructive" size="icon">
          <Trash size={16} />
        </Button>
      </form>
    </div>
  );
}
