const { PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_BUILD || process.env.NEXT_PUBLIC_ENV == '1') {
    // Apply production-only configurations here

    return {
      // To enable a static export
      output: 'export',
      // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
      trailingSlash: true,
      swcMinify: true,
      // prevent double rerendering
      reactStrictMode: false,
      // remove logs, enable this on prod
      compiler: {
        removeConsole: {
          exclude: ['error'],
        },
      },
    };
  }

  return {
    // To enable a static export
    output: 'export',
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: true,
    swcMinify: true,
    // prevent double rerendering
    reactStrictMode: false,
  };
};

module.exports = nextConfig;
