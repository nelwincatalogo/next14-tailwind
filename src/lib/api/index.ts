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

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // refresh your token
      /* const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await axios.post('/refresh', { refreshToken });
      localStorage.setItem('token', data.token);
      error.config.headers.Authorization = `Bearer ${data.token}`;
      return axios(error.config); // Retry original request */

      // or logout
      window.localStorage.removeItem('token');
      window.location.replace('/login');
    }
    return Promise.reject(error);
  },
);

export default instance;
