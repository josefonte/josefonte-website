import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://josefonte.xyz";
    const routes = ["", "/work", "/education", "/projects", "/photos"];

    return routes.map((route) => ({
        url: `${base}${route}`,
        lastModified: new Date(),
    }));
}
