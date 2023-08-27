/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "source.unsplash.com"],
  },
  experimental: {
    esmExternals: false, // THIS IS THE FLAG THAT MATTERS
  },
};
 
module.exports = nextConfig;