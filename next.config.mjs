/** @type {import('next').NextConfig} */
const nextConfig = {
    "output": "export",
    trailingSlash: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: { unoptimized: true } 
};

export default nextConfig;
