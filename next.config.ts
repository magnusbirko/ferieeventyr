import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    basePath: "/ferieeventyr", //remove before changing DNS
    images: { unoptimized: true},
    trailingSlash: true,
};

export default nextConfig;
