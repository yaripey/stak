import { Button } from '@/components/ui/button';
import { deleteLanguageAction } from '@/server/actions/languages';
import { BookOpen, Pencil, Trash } from 'lucide-react';
import Link from 'next/link';

type LanguageRowsActionsProps = {
  languageId: number;
};

export default function LanguageRowActions({
  languageId,
}: LanguageRowsActionsProps) {
  return (
    <div className="flex items-center justify-end gap-3">
      <Link href={`/collection/cards?languageId=${languageId}`}>
        <Button variant="outline" size="icon">
          <BookOpen size={16} />
        </Button>
      </Link>

      <Link href={`/edit/language/${languageId}`}>
        <Button variant="outline" size="icon">
          <Pencil size={16} />
        </Button>
      </Link>

      <form action={() => deleteLanguageAction(languageId)}>
        <Button type="submit" variant="destructive" size="icon">
          <Trash size={16} />
        </Button>
      </form>
    </div>
  );
}
