import { MetadataRoute } from "next";

const BASE_URL = "https://www.islamiccenteroflaveen.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/prayer-times", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/donate", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/events", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/education", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/membership", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/construction", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
