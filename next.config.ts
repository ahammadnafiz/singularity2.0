/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/singularity2.0",
  assetPrefix: "/singularity2.0",
}

module.exports = nextConfig