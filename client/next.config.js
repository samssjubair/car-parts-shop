/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
// module.exports = {
//   async rewrites() {
//     const res = await fetch("http://localhost:4800/api/v1/pages");
//     const pages = await res.json();
//     // console.log(pages.data)

//     return pages.data.map((page) => ({
//       source: `/${page.route}`,
//       destination: "/pages/[route]",
//       // Use the `as` field to generate the URL for the dynamic page component.
//       // as: `/pages/${page.route}`,
//     }));
//   },
// };

