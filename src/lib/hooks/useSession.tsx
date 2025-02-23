'use client';

import { hookstate, useHookstate } from '@hookstate/core';
import { localstored } from '../store/plugins/localStored';
import axios from '@/lib/api';
import merge from 'lodash.merge';

// Initial State
const initialState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') || null : null,
  isAuthenticated: !!localStorage.getItem('token'),
};

// Create global state with Hookstate
const sessionState = hookstate(
  initialState,
  localstored({
    key: 'session',
    onRestored: (s) => {
      const restored = s.get({ noproxy: true });

      if (s.value) {
        const synced = merge({}, initialState, restored);
        s.set(synced);
      }
    },
  }),
);

// Session manager functions
export const useSession = () => {
  const state = useHookstate(sessionState);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('https://your-api.com/login', {
        email,
        password,
      });
      const token = response.data.token;
      state.merge({ token, isAuthenticated: true });
      // Note: localstored plugin will sync this to localStorage automatically
    } catch (error) {
      console.error('Login failed:', error);
      state.merge({ token: null, isAuthenticated: false });
    }
  };

  // Logout function
  const logout = () => {
    state.merge({ token: null, isAuthenticated: false });
  };

  // Optional: Check session validity (if your API has an endpoint for this)
  const checkSession = async () => {
    const token = state.token.get();
    if (!token) {
      state.merge({ token: null, isAuthenticated: false });
      return;
    }
    try {
      await axios.get('https://your-api.com/check-token', {
        headers: { Authorization: `Bearer ${token}` },
      });
      state.merge({ isAuthenticated: true }); // Token still valid
    } catch (error) {
      state.merge({ token: null, isAuthenticated: false });
    }
  };

  return {
    token: state.token.get(),
    isAuthenticated: state.isAuthenticated.get(),
    login,
    logout,
    checkSession,
  };
};

// Export raw state for advanced use (optional)
export default sessionState;
