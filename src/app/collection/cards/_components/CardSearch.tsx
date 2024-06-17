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
      placeholder="Search for a card"
      value={searchText}
      onChange={({ target }) => setSearchText(target.value)}
    />
  );
}
