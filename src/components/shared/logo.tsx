
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("text-lg md:text-xl font-logo font-semibold", className)}>
      DÉKÉMI SCENTS
    </Link>
  );
}
