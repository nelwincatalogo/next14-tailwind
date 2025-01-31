'use client';

import axios from 'axios';
import CONFIG from '@/lib/config';

const instance = axios.create({
  baseURL: CONFIG.setting.api_url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use(function (config) {
  if (window !== undefined) {
    const token = window.localStorage.getItem('token');
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
