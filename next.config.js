/** @type {import('next').NextConfig} */
const nextConfig = {
  // To enable a static export
  output: 'export',
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,
  swcMinify: true,
  // prevent double rerendering
  reactStrictMode: false,
};

module.exports = nextConfig;
