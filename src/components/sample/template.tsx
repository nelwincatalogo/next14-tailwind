'use client';

import LoadingDots from '@/components/common/loading/loading-dots';
import { AlertDialogDemo } from '@/components/sample/AlertDialogSample';
import { DialogCloseButton } from '@/components/sample/DialogSample';
import ReactAlertSample from '@/components/sample/ReactAlertSample';
import { DrawerDialogDemo } from '@/components/sample/responsive-dialog';
import { AdvancedDateRangePicker } from '@/components/ui-collection/advance-range-date-picker';
import { Badge } from '@/components/ui/badge';

import Loading from '../common/loading';
import { LoadingButton } from '../common/loading/loading-button';
import LoadingFull from '../common/loading/loading-full';
import { ScrollArea } from '../ui/scroll-area';

export default function Template() {
  return (
    <ScrollArea className="h-screen">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-12">
        <h1 className="text-center text-4xl font-bold text-red-500">Next-Tailwind Starter Template</h1>

        <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Available Fonts</div>
        <div className="flex gap-4">
          <h1 className="text-center font-sans text-4xl font-bold text-green-500">Geist Font</h1>
          <h1 className="text-center font-inter text-4xl font-bold text-amber-500">Inter Font</h1>
          <h1 className="text-center font-poppins text-4xl font-bold text-blue-500">Popppins Font</h1>
        </div>

        <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Toast Example</div>
        <ReactAlertSample />

        <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Dialog Example</div>
        <div className="flex gap-4">
          <AlertDialogDemo />
          <DialogCloseButton />
          <DrawerDialogDemo />
        </div>

        <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Badge Example</div>
        <div className="flex gap-4">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="gray">Gray</Badge>
          <Badge variant="orange">Orange</Badge>
        </div>

        <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Advance Date Picker</div>
        <div className="flex gap-4">
          <AdvancedDateRangePicker />
        </div>

        <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Loading Example</div>
        <div className="flex items-center gap-4">
          <Loading />
          <LoadingButton />
          <LoadingDots />
          <LoadingDots message="Please wait" dots="." />
        </div>

        <LoadingFull className="mt-4" />
      </div>
    </ScrollArea>
  );
}
