/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.evbuc.com",
      },
      {
        protocol: "https",
        hostname: "cdn2.fatsoma.com",
      },
      {
        protocol: "https",
        hostname: "static.designmynight.com",
      },
      {
        protocol: "https",
        hostname: "d.ibtimes.co.uk",
      },
      {
        protocol: "https",
        hostname: "fatsoma.imgix.net",
      },
      {
        protocol: "https",
        hostname: "londonboatparty.co.uk",
      },
    ],
  },
};

export default nextConfig;
