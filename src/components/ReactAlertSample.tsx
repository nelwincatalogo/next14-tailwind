'use client';

import { useGlobalStatePersist } from '@/lib/store/persist';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';

export default function ReactAlertSample() {
  const gStateP = useGlobalStatePersist();

  useEffect(() => {
    console.log('Hello There: ', gStateP.hello.value);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Default */}
      <Button
        onClick={() => {
          toast('Event has been created', {
            duration: 900000,
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }}
      >
        Default Toast
      </Button>

      {/* Success */}
      <Button
        className="bg-green-500 hover:bg-green-600"
        onClick={() => {
          toast.success('Event has been created', {
            duration: 900000,
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }}
      >
        Success Toast
      </Button>

      {/* Warning */}
      <Button
        className="bg-amber-500 hover:bg-amber-600"
        onClick={() => {
          toast.warning('Event has been created', {
            duration: 900000,
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }}
      >
        Warning Toast
      </Button>

      {/* Error */}
      <Button
        className="bg-red-500 hover:bg-red-600"
        onClick={() => {
          toast.error('Event has been created', {
            duration: 900000,
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }}
      >
        Error Toast
      </Button>

      {/* Info */}
      <Button
        className="bg-blue-500 hover:bg-blue-600"
        onClick={() => {
          toast.info('Event has been created', {
            duration: 900000,
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }}
      >
        Info Toast
      </Button>

      {/* Loading */}
      <Button
        variant="outline"
        onClick={() => {
          const toastId = toast.loading('Event has been created', {
            duration: 900000,
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });

          setTimeout(() => {
            toast.dismiss(toastId);

            toast.success('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
              },
            });
          }, 3000);
        }}
      >
        Loading Toast
      </Button>

      {/* Dismiss */}
      <Button onClick={() => toast.dismiss()}>Dismiss All</Button>
    </div>
  );
}
