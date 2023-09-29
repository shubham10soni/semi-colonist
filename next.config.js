// next.config.js

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(nextConfig);
module.exports = {
  images: {
    domains: [
      "www.google.com",
      "images.unsplash.com",
      "octodex.github.com",
      "unsplash.com",
    ],
  },
};
