// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//     output: 'export',

//   images: {
//     domains: ['encrypted-tbn0.gstatic.com',"img.uptvs.com","cdn.nody.ir","www.film2movie.asia"], 
//         unoptimized: true,

//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'picsum.photos',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
//    basePath: '/movie-app', 
//   assetPrefix: '/movie-app',
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: "frame-src 'self' https://www.aparat.com;",
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;


// /next.config.ts

import type { NextConfig } from 'next';

// نام ریپازیتوری گیت‌هاب خود را در اینجا قرار دهید
const repoName = 'movie-app'; 

const nextConfig: NextConfig = {
  // فعال کردن خروجی استاتیک
  output: 'export',

  // تنظیم مسیر پایه برای گیت‌هاب پیجز
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    // غیرفعال کردن بهینه‌سازی تصاویر برای خروجی استاتیک
    unoptimized: true,
    
    // این بخش را دست‌نخورده باقی بگذارید
    domains: ['encrypted-tbn0.gstatic.com',"img.uptvs.com","cdn.nody.ir","www.film2movie.asia"], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.aparat.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;