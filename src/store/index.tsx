'use client';

import { hookstate, useHookstate } from '@hookstate/core';
import { devtools } from '@hookstate/devtools';

const initialState = {};

const globalState = hookstate(initialState, devtools({ key: 'globalState' }));

export const useGlobalState = () => useHookstate(globalState);

export default globalState;
