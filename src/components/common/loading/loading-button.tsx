'use client';

import { Button } from '@/components/ui/button';
import Loading from '.';

export function LoadingButton(props) {
  return (
    <Button disabled {...props}>
      <Loading className="mr-2" />
      Please wait
    </Button>
  );
}
