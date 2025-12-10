/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // needed for static export
  trailingSlash: true,
  basePath: '/rafay-portfolio', // your repo name
  assetPrefix: '/rafay-portfolio/', // make sure to include the trailing slash
  images: {
    unoptimized: true,
    domains: ['github.com', 'avatars.githubusercontent.com', 'media.licdn.com'],
  },
}

module.exports = nextConfig
