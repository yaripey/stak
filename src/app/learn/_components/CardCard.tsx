import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type CardCardProps = {
  front: string;
  back: string;
  isFrontShown: boolean;
  isBackShown: boolean;
};

export default function CardCard({
  front,
  back,
  isFrontShown,
  isBackShown,
}: CardCardProps) {
  return (
    <Card className="w-[350px] select-none text-center">
      <div
        className={cn('p-5 text-white', {
          'text-black': isFrontShown,
        })}
      >
        {front}
      </div>
      <Separator />
      <div
        className={cn('p-5 text-white', {
          'text-black': isBackShown,
        })}
      >
        {back}
      </div>
    </Card>
  );
}
