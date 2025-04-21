import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*all images allowed*/
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
