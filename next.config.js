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

  // required for GitHub Pages
  output: 'export',
  trailingSlash: true,

  // your existing settings
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'media.licdn.com'],
  },
}

module.exports = nextConfig
