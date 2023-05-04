/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    carBrandApiKey: "449fc12783msh5606707276ab2a8p1a0ab0jsn91e6b618962b",
    carModelApiKey: "449fc12783msh5606707276ab2a8p1a0ab0jsn91e6b618962b",
    api: "http://localhost:4800/api/v1",
  }
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

