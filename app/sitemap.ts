import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://scalemonthly.com",
      lastModified: new Date(),
    },
    {
      url: "https://scalemonthly.com/compound-interest-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://scalemonthly.com/how-much-net-worth-to-retire",
      lastModified: new Date(),
    },
    {
      url: "https://scalemonthly.com/how-much-income-can-your-net-worth-generate",
      lastModified: new Date(),
    },
    {
      url: "https://scalemonthly.com/safe-withdrawal-rate-for-retirement",
      lastModified: new Date(),
    },
  ];
}