/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "", // Use basePath only in production
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "", // Use assetPrefix only in production
};

module.exports = nextConfig;
