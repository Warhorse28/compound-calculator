import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://scalemonthly.com";

  const routes = [
    "",
    "/compound-interest-calculator",
    "/how-much-net-worth-to-retire",
    "/how-much-income-can-your-net-worth-generate",
    "/safe-withdrawal-rate-for-retirement",
    "/how-to-calculate-net-worth-needed-for-retirement",

    "/net-worth-needed-to-retire-with-3000-a-month",
    "/net-worth-needed-to-retire-with-4000-a-month",
    "/net-worth-needed-to-retire-with-5000-a-month",
    "/net-worth-needed-to-retire-with-6000-a-month",
    "/net-worth-needed-to-retire-with-7000-a-month",
    "/net-worth-needed-to-retire-with-8000-a-month",
    "/net-worth-needed-to-retire-with-9000-a-month",
    "/net-worth-needed-to-retire-with-10000-a-month",
    "/net-worth-needed-to-retire-with-11000-a-month",
    "/net-worth-needed-to-retire-with-12000-a-month",
    "/net-worth-needed-to-retire-with-15000-a-month",
    "/net-worth-needed-to-retire-with-20000-a-month",
    "/net-worth-needed-to-retire-with-25000-a-month",
    "/net-worth-needed-to-retire-with-30000-a-month",
    "/net-worth-needed-to-retire-with-40000-a-month",
    "/net-worth-needed-to-retire-with-50000-a-month",
    "/net-worth-needed-to-retire-with-60000-a-month",

    "/what-net-worth-generates-10000-a-month",
    "/what-net-worth-generates-20000-a-month",
    "/what-net-worth-generates-30000-a-month",
    "/what-net-worth-generates-50000-a-month",
    "/how-much-income-can-1-million-generate",
    "/how-much-income-can-5-million-generate",

    "/is-2000-a-month-enough-to-retire",
    "/is-3000-a-month-enough-to-retire",
    "/is-4000-a-month-enough-to-retire",
    "/is-5000-a-month-enough-to-retire",
    "/is-6000-a-month-enough-to-retire",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
