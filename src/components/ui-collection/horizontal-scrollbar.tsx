'use client';

import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function HorizontalScrollBar({ children, scrollClassName = '' }) {
  return (
    <div className="flex">
      <ScrollArea className={cn('w-1 flex-1', scrollClassName)}>
        {children}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
