const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';
const shouldAddBasePath = isProd && !isVercel;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // needed for static export
  trailingSlash: true,
  basePath: shouldAddBasePath ? '/rafay-portfolio' : '', // your repo name
  assetPrefix: shouldAddBasePath ? '/rafay-portfolio/' : '', // make sure to include the trailing slash
  images: {
    unoptimized: true,
    domains: ['github.com', 'avatars.githubusercontent.com', 'media.licdn.com'],
  },
}

module.exports = nextConfig
