import { Button } from '@/components/ui/button';
import { deleteLanguageAction } from '@/server/actions/languages';
import { BookOpen, FilePlus, GraduationCap, Pencil, Trash } from 'lucide-react';
import Link from 'next/link';

type LanguageRowsActionsProps = {
  languageId: number;
};

export default function LanguageRowActions({
  languageId,
}: LanguageRowsActionsProps) {
  // TODO: remove code repetition
  return (
    <div className="flex items-center justify-end gap-3">
      <Link href={`/create/card?languageId=${languageId}`}>
        <Button variant="outline" size="icon">
          <FilePlus size={16} />
        </Button>
      </Link>

      <Link href={`/learn/${languageId}`}>
        <Button variant="outline" size="icon">
          <GraduationCap size={16} />
        </Button>
      </Link>

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
