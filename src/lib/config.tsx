'use client';

/* eslint-disable import/no-anonymous-default-export */

export const currentMode = Number(process.env.NEXT_PUBLIC_ENV) || 0;
export const config = [
  // dev mode
  {
    api_url: 'https://example.com/api',
  },
  // prod mode
  {
    api_url: 'https://example.com/api',
  },
];

export default {
  project: 'next13_tailwindcss',
  setting: config[currentMode],
};
