'use client';

import { hookstate, useHookstate } from '@hookstate/core';
import { devtools } from '@hookstate/devtools';
import { useQuery } from '@tanstack/react-query';
import { endOfMonth, startOfMonth } from 'date-fns';

import axios from '@/lib/api';
import { useGlobalStatePersist } from '@/lib/store/persist';

import { IMarketplaceTopProducts } from '../types';

// State
const initialState = {
  startDate: startOfMonth(new Date()),
  endDate: endOfMonth(new Date()),
};
const marketplaceTopProductsState = hookstate(initialState, devtools({ key: 'marketplaceTopProductsState' }));

// Fetcher
const fetchMarketplaceTopProducts = async (currentUser = 'admin') => {
  const { data } = await axios.get(`/${currentUser}/dashboard/viewMarketplaceTopProducts`, {
    params: {
      ...marketplaceTopProductsState.value,
    },
  });
  return data.data as IMarketplaceTopProducts[];
};

// hooks
const useMarketplaceTopProducts = (currentUser = 'admin') => {
  const state = useHookstate(marketplaceTopProductsState);
  const gStateP = useGlobalStatePersist();

  const marketplaceTopProductsQuery = useQuery({
    queryKey: [
      'marketplaceTopProducts-all',
      {
        currentUser,
        username: gStateP['user'].user.username.value,
        ...state.value,
      },
    ],
    queryFn: () => fetchMarketplaceTopProducts(currentUser),
    enabled: !!gStateP['user'].value,
  });

  return { state, marketplaceTopProductsQuery };
};

export { marketplaceTopProductsState };
export default useMarketplaceTopProducts;
