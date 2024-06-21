import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type CardCardProps = {
  front: string;
  back: string;
  flipped: boolean;
};

export default function CardCard({ front, back, flipped }: CardCardProps) {
  return (
    <Card className="w-[350px] select-none text-center">
      <div className="p-5">{front}</div>
      <Separator />
      <div
        className={cn('p-5 text-white', {
          'text-black': flipped,
        })}
      >
        {back}
      </div>
    </Card>
  );
}
