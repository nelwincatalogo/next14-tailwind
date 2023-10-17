'use client';

import { extend, hookstate, useHookstate } from '@hookstate/core';
// import { localstored } from '@hookstate/localstored';
import { devtools } from '@hookstate/devtools';
import { localstored } from './localStored';

export const globalStatePersist = hookstate(
  {
    hello: false,
  },
  extend(localstored({ key: 'globalStatePersist' }), devtools({ key: 'globalStatePersist' }))
);

export const useGlobalStatePersist = () => useHookstate(globalStatePersist);
