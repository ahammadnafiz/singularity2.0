/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "singularity.gituhb.io", // Replace with your repository name
}

module.exports = nextConfig

