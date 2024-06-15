import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';

type CardRowsActionsProps = {
  deleteCard: () => void;
};

export default function CardRowActions({ deleteCard }: CardRowsActionsProps) {
  return (
    <div className="flex items-center justify-end gap-3">
      <Button variant="outline" size="icon">
        <Pencil size={16} />
      </Button>

      <form action={deleteCard}>
        <Button type="submit" variant="destructive" size="icon">
          <Trash size={16} />
        </Button>
      </form>
    </div>
  );
}
