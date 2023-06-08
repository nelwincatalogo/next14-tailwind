'use client';

import axios from 'axios';
import CONFIG from '@/config';

export const BLOCKCHAIN = '/blockchain';

const instance = axios.create({
  baseURL: CONFIG.setting.api_url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export default instance;
