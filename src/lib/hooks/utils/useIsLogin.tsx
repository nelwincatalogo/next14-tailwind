'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGlobalStatePersist } from '@/lib/store/persist';
import { paths, roles } from './useProtected';

export default function useIsLogin() {
  const gStateP = useGlobalStatePersist();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gStateP['user'].value) {
      // Redirect the user to a path that matches their role
      for (let i = 0; i < roles.length; i++) {
        if (gStateP['user'][roles[i]].value) {
          router.push(paths[i]);
          break;
        }
      }

      return;
    }
    setLoading(false);
  }, []);

  return { loading };
}
