/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/test',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
