'use client';

import { cn } from '@/lib/utils';
import Loading from '../loading';
import LoadingDots from '../loading/loading-dots';

interface LoadingFullProps {
  className?: string;
  message?: string;
  dots?: string;
}

export default function LoadingFull({
  className = '',
  message = 'Loading Data',
  dots = '.',
  ...props
}: LoadingFullProps) {
  return (
    <div className={cn('grid place-items-center gap-2', className)} {...props}>
      <Loading className="mx-auto" />
      <LoadingDots message={message} dots={dots} />
    </div>
  );
}
