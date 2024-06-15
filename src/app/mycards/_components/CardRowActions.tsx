import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';

export default function CardRowActions() {
  return (
    <div className="flex items-center justify-end gap-3">
      <Button variant="outline" size="icon">
        <Pencil size={16} />
      </Button>
      <Button variant="destructive" size="icon">
        <Trash size={16} />
      </Button>
    </div>
  );
}
