'use client';

import { Button } from '@/components/ui/button';
import Loading from '.';
import { cn } from '@/lib/utils';

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
