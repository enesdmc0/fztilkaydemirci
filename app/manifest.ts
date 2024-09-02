import { AppDescription, AppName, AppShortName, Favicon, BackgroundColor } from "@/lib/metadatas";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: AppName,
        short_name: AppShortName,
        description: AppDescription,
        start_url: "/",
        display: "standalone",
        background_color: BackgroundColor,
        orientation: "portrait",
        scope: "/",
        lang: "tr",
        icons: [
            {
                src: Favicon.url.toString(),
                sizes: Favicon.sizes,
                type: Favicon.type,
                purpose: "maskable",
            },
            {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        related_applications: [],
        prefer_related_applications: false,
    };
}