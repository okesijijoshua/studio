
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-headline font-semibold", className)}>
      <Image src="/images/Dekemi logo.jpg" alt="Dekemi Scents Logo" width={40} height={40} className="rounded-full" />
      Dekemi Scents
    </Link>
  );
}
