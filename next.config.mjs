import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "blogger.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    const redirectMap = {
      "/2024/01/nstc-21-registration.html": "/apply",
      "/p/nstc-faqs.html": "/faqs",
      "/p/contact-us.html": "/contact",
      "/2021/06/nstc-scholarships.html": "/prizes",

      // NBTC
      "/search/label/NBTC": "/nbtc",
      "/search/label/NMTC": "/nmtc",
      "/search/label/NCTC": "/nctc",
      "/search/label/NPTC": "/nptc",
      "/2021/06/national-biology-talent-contest-nbtc.html":
        "/nbtc/introduction",
      "/2022/01/nbtc-preparation-guide.html": "/nbtc/guide",
      "/2022/12/nbtc-sample-paper-worked-solution.html": "/nbtc/sample-paper",
      "/search/label/NBTC%20Result": "/nbtc/results",
      "/2022/08/international-biology-olympiad.html": "/nbtc/ibo",
      "/2021/06/nbtc-result.html": "/nbtc/results/nbtc-17",
      "/2021/12/nbtc-18-result.html": "/nbtc/results/nbtc-18",
      "/2022/07/nbtc-19-result.html": "/nbtc/results/nbtc-19",
      "/2023/07/nstc-20-biology-result.html": "/nbtc/results/nbtc-20",

      // NCTC
      "/2022/05/national-chemistry-talent-contest.html": "/nctc/introduction",
      "/2021/06/nctc-past-papers.html": "/nctc/sample-paper",
      "/search/label/NCTC%20Result": "/nctc/results",
      "/2021/06/nctc-result.html": "/nctc/results/nctc-17",
      "/2021/12/nctc-18-result.html": "/nctc/results/nctc-18",
      "/2022/07/nctc-19-result.html": "/nctc/results/nctc-19",
      "/2023/07/nstc-20-chemistry-result.html": "/nctc/results/nctc-20",
      // NMTC
      "/p/nmtc.html": "/nmtc/introduction",
      "/2021/06/nmtc-past-papers.html": "/nmtc/sample-paper",
      "/search/label/NMTC%20Result": "/nmtc/results",
      "/2021/06/nmtc-result.html": "/nmtc/results/nmtc-17",
      "/2021/12/nmtc-18-result.html": "/nmtc/results/nmtc-18",
      "/2022/07/nmtc-19-result.html": "/nmtc/results/nmtc-19",
      "/2023/07/nstc-20-mathematics-result.html": "/nmtc/results/nmtc-20",
      // NPTC
      "/2022/03/national-physics-talent-contest.html": "/nptc/introduction",
      "/2021/06/nptc-past-papers.html": "/nptc/sample-paper",
      "/search/label/NPTC%20Result": "/nptc/results",
      "/2021/06/nptc-result.html": "/nptc/results/nptc-17",
      "/2021/12/nptc-18-result.html": "/nptc/results/nptc-18",
      "/2022/07/nptc-19-result.html": "/nptc/results/nptc-19",
      "/2023/07/nstc-20-physics-result.html": "/nptc/results/nptc-20",
    };

    return Object.entries(redirectMap).map(([source, destination]) => ({
      source,
      destination,
      permanent: true, // Use 308 Permanent Redirect
    }));
  },
};

export default withMDX(config);
