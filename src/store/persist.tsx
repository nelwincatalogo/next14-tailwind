'use client';

import { extend, hookstate, useHookstate } from '@hookstate/core';
// import { localstored } from '@hookstate/localstored';
import { devtools } from '@hookstate/devtools';
import merge from 'lodash.merge';

import { localstored } from './plugins/localStored';

const initialState = {
  test: false,
};

export const globalStatePersist = hookstate(
  initialState,
  extend(
    localstored({
      key: 'globalStatePersist',
      onRestored: (s) => {
        const restored = s.get({ noproxy: true });

        if (s.value) {
          const synced = merge({}, initialState, restored);

          console.log('restored state: ', synced);
          s.set(synced);
        } else {
          console.log('restored state: localstorage is empty');
        }
      },
    }),
    devtools({ key: 'globalStatePersist' }),
  ),
);

export const useGlobalStatePersist = () => useHookstate(globalStatePersist);
