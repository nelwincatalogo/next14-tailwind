'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const StateContext = createContext<any>({});
export const useStateContext = () => useContext(StateContext);

export function StateProvider({ children }) {
  const [state, setState] = useState({});

  useEffect(() => {
    console.log('STATE: ', state);
  }, [state]);

  return <StateContext.Provider value={{ state, setState }}>{children}</StateContext.Provider>;
}
