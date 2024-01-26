'use client';

import { useToast } from '@/components/ui/use-toast';
import { useGlobalStatePersist } from '@/lib/store/persist';
import { useEffect } from 'react';

export default function ReactAlertSample() {
  const { toast } = useToast();
  const gStateP = useGlobalStatePersist();

  useEffect(() => {
    console.log('Hello There: ', gStateP.hello.value);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
          gStateP.hello.set(true);
        }}
        className="rounded-md bg-green-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-green-600 active:scale-95"
      >
        Show Alert
      </button>
    </div>
  );
}
