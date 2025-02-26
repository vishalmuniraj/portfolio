/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/portfolio', // Must match the GitHub repo name
  assetPrefix: '/portfolio/', // Ensures assets load correctly
};

module.exports = nextConfig;
