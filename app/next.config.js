/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = withFonts({
  ...nextConfig,
  webpack(config) {
    return config;
  },
});
