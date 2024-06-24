import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LanguageType } from '@/server/db/schema';

type LanguageSelectorProps = {
  languageId: number | null;
  setLanguageId: (id: number) => void;
  languages: LanguageType[];
};

export default function LanguageSelector({
  languageId,
  languages,
  setLanguageId,
}: LanguageSelectorProps) {
  return (
    <Select
      defaultValue={languageId?.toString()}
      onValueChange={(newLanguageId) => setLanguageId(parseInt(newLanguageId))}
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
  );
}
