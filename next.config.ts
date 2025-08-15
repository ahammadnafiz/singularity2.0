/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: "/singularity2.0", // Comment out for local development
}

module.exports = nextConfig