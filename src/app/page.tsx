'use client';

import ReactAlertSample from '@/components/ReactAlertSample';

export default function Home() {
  return (
    <main className="bg-gray-200">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-red-500">
          Next-Tailwind Starter Template
        </h1>

        <ReactAlertSample />
      </div>
    </main>
  );
}
