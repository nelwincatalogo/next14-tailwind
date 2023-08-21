'use client';

import { hookstate, useHookstate } from '@hookstate/core';
import { localstored } from '@hookstate/localstored';

export const globalStatePersist = hookstate(
  {
    hello: false,
  },
  localstored({ key: 'globalStatePersist' })
);

export const useGlobalStatePersist = () => useHookstate(globalStatePersist);
