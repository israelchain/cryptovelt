const path = require('path')

// Set via env in CI for GitHub Pages project subdomain.
// Leave unset when a custom domain is configured (site serves from root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}

module.exports = nextConfig
