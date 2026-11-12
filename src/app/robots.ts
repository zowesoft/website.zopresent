import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://zopresent.vercel.app/sitemap.xml",
    host: "https://zopresent.vercel.app",
  };
}
