const { PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  const baseConfig = {
    ...defaultConfig,
    output: 'export', // To enable a static export
    trailingSlash: true, // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    swcMinify: true, // minify code
    reactStrictMode: false, // prevent double rerendering
  };

  // Apply production-only configurations here
  if (phase === PHASE_PRODUCTION_BUILD || process.env.NEXT_PUBLIC_ENV == '1') {
    return {
      ...baseConfig,
      compiler: {
        removeConsole: {
          exclude: ['error', 'warn'], // remove logs except error and warn
        },
      },
    };
  }

  return {
    ...baseConfig,
    // Add development-specific settings
    devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-left',
    },
  };
};

module.exports = nextConfig;
