import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX()(nextConfig);
