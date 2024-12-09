'use client';

import { useGlobalStatePersist } from '@/lib/store/persist';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define user roles and their corresponding paths
export const roles = [
  'isSuperAdmin',
  'isAdmin',
  'isOperation1',
  'isOperation2',
  'isSale1',
  'isSale2',
  'isFinance1',
  'isFinance2',
];
export const paths = ['/admin', '/admin', '/operation', '/operation', '/sale', '/sale', '/finance', '/finance'];
export const rolePaths = {
  isSuperAdmin: '/admin',
  isAdmin: '/admin',
  isOperation1: '/operation',
  isOperation2: '/operation',
  isSale1: '/sale',
  isSale2: '/sale',
  isFinance1: '/finance',
  isFinance2: '/finance',
};

export default function useProtected() {
  const router = useRouter();
  const gStateP = useGlobalStatePersist();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Retrieving the user object from the persisted global state.
    const user = gStateP['user'].value;

    // If no user is found, redirect to the homepage.
    if (!user) {
      router.push('/');
      return;
    }

    const userHasRequiredRole = Object.entries(rolePaths).some(([role, path]) => {
      if (pathname.includes(path)) {
        return user[role];
      }
      return false;
    });

    // If the user does not have the required role for the current path, redirect them to the homepage
    if (!userHasRequiredRole) {
      router.push('/');
    }

    // If the user passes all checks, stop the loading state.
    setLoading(false);
  }, []);

  return { loading };
}
