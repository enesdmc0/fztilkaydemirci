import {BASE_URL} from "@/lib/metadatas";

export default async function sitemap() {

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            priority: 1,
        },
    ];
}