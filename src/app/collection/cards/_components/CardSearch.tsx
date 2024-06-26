import { Input } from '@/components/ui/input';

type CardSearchProps = {
  searchText: string;
  setSearchText: (newText: string) => void;
};

export default function CardSearch({
  searchText,
  setSearchText,
}: CardSearchProps) {
  return (
    <Input
      className="rounded-2xl border-4 border-purple-500 bg-purple-50 p-5 transition-all focus:border-purple-300"
      placeholder="Search for a card"
      value={searchText}
      onChange={({ target }) => setSearchText(target.value)}
    />
  );
}
