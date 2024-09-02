import {MetadataRoute} from "next";
import {BASE_URL} from "@/lib/metadatas";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/private"],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: "/search",
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}