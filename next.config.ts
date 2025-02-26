/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static export
  basePath: '/portfolio', // Set GitHub repo name as base path
  assetPrefix: '/portfolio/',
};

module.exports = nextConfig;
