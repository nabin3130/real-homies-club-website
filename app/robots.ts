import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  return {
    rules: {
      userAgent: "*",
      ...(isProduction ? { allow: "/" } : { disallow: "/" }),
    },
    sitemap: "https://rea1homies.com/sitemap.xml",
  };
}
