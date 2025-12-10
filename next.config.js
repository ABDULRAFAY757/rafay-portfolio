// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['github.com', 'avatars.githubusercontent.com', 'media.licdn.com'],
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/rafay-portfolio',
  assetPrefix: '/rafay-portfolio',
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'media.licdn.com'],
  },
}

module.exports = nextConfig
