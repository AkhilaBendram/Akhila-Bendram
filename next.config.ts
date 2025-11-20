import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    disableCssOpacityPlugin: true,
    disableLightningcss: true,
  },
};

module.exports = nextConfig;

export default nextConfig;
