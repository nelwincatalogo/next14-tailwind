'use client';

import { hookstate, useHookstate } from '@hookstate/core';
import { devtools } from '@hookstate/devtools';

export const globalState = hookstate(
  {
    user: null as any,
  },
  devtools({ key: 'globalState' })
);

export const useGlobalState = () => useHookstate(globalState);
