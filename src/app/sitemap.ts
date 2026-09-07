import type { MetadataRoute } from "next";

const siteUrl = "https://danielsias.dev";

const routes = [
  "",
  "/about",
  "/experience",
  "/marketing",
  "/projects",
  "/projects/workflow-intelligence",
  "/projects/verbatim",
  "/projects/transaction-toolkit",
  "/projects/knowledge-exporter",
  "/skills",
  "/education",
  "/resume",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
