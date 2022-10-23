/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = withFonts({
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    return config;
  },
});
