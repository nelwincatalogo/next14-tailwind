'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/core/utils';

import Loading from '.';

interface LoadingButtonProps {}

export function LoadingButton({
  className,
  children,
  ...props
}: LoadingButtonProps & React.ComponentProps<typeof Button>) {
  return (
    <Button disabled className={cn('', className)} {...props}>
      <Loading className="mr-2" />
      {children ? children : 'Loading'}
    </Button>
  );
}
