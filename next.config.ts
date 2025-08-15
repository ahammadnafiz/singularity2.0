/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? "/singularity2.0" : "",
  assetPrefix: process.env.NODE_ENV === 'production' ? "/singularity2.0" : "",
  trailingSlash: false,
}

module.exports = nextConfig