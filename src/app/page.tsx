'use client';

import ReactAlertSample from '@/components/ReactAlertSample';

export default function Home() {
  return (
    <main className="bg-gray-200">
      <div className="min-h-screen flex gap-4 flex-col justify-center items-center">
        <h1 className="text-red-500 font-bold text-4xl">
          Next-Tailwind Starter Template
        </h1>

        <ReactAlertSample />
      </div>
    </main>
  );
}
