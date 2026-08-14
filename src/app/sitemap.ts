import type { MetadataRoute } from "next";
import { INSIGHTS } from "./insights/insights-data";
import { PATH_SLUGS } from "./students/pillars/data";

const SITE_URL = "https://tradesnky.org";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

type Route = { path: string; priority: number; changeFrequency: ChangeFreq };

const STATIC_ROUTES: Route[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/students", priority: 0.9, changeFrequency: "monthly" },
  { path: "/parents", priority: 0.8, changeFrequency: "monthly" },
  { path: "/educators", priority: 0.8, changeFrequency: "monthly" },
  { path: "/employers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/policymakers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/students/quiz", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/what-is-tradesnky", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/board", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/partners", priority: 0.6, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pillarRoutes: Route[] = PATH_SLUGS.map((slug) => ({
    path: `/students/pillars/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const insightRoutes: Route[] = INSIGHTS.map((insight) => ({
    path: `/insights/${insight.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...STATIC_ROUTES, ...pillarRoutes, ...insightRoutes].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
