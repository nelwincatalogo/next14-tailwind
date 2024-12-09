'use client';

import { Button } from '@/components/ui/button';
import { SvgSpinnersBarsRotateFade } from '@/components/icons/SvgSpinnersBarsRotateFade';

export function ButtonLoading(props) {
  return (
    <Button disabled {...props}>
      <SvgSpinnersBarsRotateFade className="mr-2 size-4 animate-spin" />
      Please wait
    </Button>
  );
}
