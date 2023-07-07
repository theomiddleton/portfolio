module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com', "s0.darkroom.com"],
  },
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
+ output: "standalone",
});