import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LanguageType } from '@/server/db/schema';
import { BadgeX } from 'lucide-react';

type LanguageSelectorProps = {
  languageId: number | undefined;
  setLanguageId: (id: string | undefined) => void;
  languages: LanguageType[];
  clearButton?: boolean;
};

export default function LanguageSelector({
  languageId,
  languages,
  setLanguageId,
  clearButton,
}: LanguageSelectorProps) {
  const initLanguageId =
    languages.some((lang) => lang.id === languageId) && languageId
      ? languageId.toString()
      : undefined;
  return (
    <div className="flex gap-1">
      <Select
        value={languageId === undefined ? '' : languageId.toString()}
        onValueChange={(newLanguageId) => setLanguageId(newLanguageId)}
        defaultValue={initLanguageId}
      >
        <SelectTrigger className="w-72 rounded-2xl border-4 border-cyan-500 bg-cyan-100 p-5 transition-all focus:border-cyan-300">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent className="bg-cyan-200">
          {languages.map((language) => (
            <SelectItem
              className="transition-all"
              key={language.id}
              value={language.id.toString()}
            >
              {language.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {clearButton && (
        <Button
          disabled={!languageId}
          variant={'destructive'}
          className="box-content rounded-2xl border-4 border-red-600"
          size="icon"
          onClick={() => setLanguageId(undefined)}
        >
          <BadgeX size={23} />
        </Button>
      )}
    </div>
  );
}
