'use client';

import { AlertDialogDemo } from '@/components/AlertDialogSample';
import { DialogCloseButton } from '@/components/DialogSample';
import ReactAlertSample from '@/components/ReactAlertSample';

export default function Home() {
  return (
    <main className="bg-gray-200 font-sans">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
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
        </div>
      </div>
    </main>
  );
}
