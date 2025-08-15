
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("text-xl font-headline font-semibold", className)}>
      Dekemi Scents
    </Link>
  );
}
