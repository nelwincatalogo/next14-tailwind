'use client';

import { cn } from '@/lib/utils';

import { SvgSpinnersBarsRotateFade } from '../icons/SvgSpinnersBarsRotateFade';

interface LoadingProps {
  className?: string;
}

export default function Loading({ className = '', ...props }: LoadingProps) {
  return <SvgSpinnersBarsRotateFade className={cn('size-4 animate-spin', className)} {...props} />;
}
