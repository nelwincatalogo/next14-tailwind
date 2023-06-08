'use client';

/* eslint-disable import/no-anonymous-default-export */

export const currentNetwork = Number(process.env.NEXT_PUBLIC_ENV) || 0;
export const config = [
  {
    api_url: 'https://stg-api.anitolegends.com/v2',
  },
  {
    api_url: 'https://stg-api.anitolegends.com/v2',
  },
];

export default {
  project: 'next13_tailwindcss_with_connect_wallet',
  setting: config[currentNetwork],
};
