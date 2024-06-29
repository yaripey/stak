import { Button } from '@/components/ui/button';
import Link from 'next/link';

type RoutingErrorProps = {
  errorText: string;
  buttonText: string;
  href: string;
};

export default function RoutingError({
  errorText,
  buttonText,
  href,
}: RoutingErrorProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 pt-5">
      <p className="text-lg">{errorText}</p>
      <Link href={href}>
        <Button>{buttonText}</Button>
      </Link>
    </div>
  );
}
