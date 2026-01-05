import { MetadataRoute } from "next";
import { getAllPosts } from "./lib/posts";

function safeDate(value?: string) {
    const d = value ? new Date(value) : new Date();
    return isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://learnedops.com";

    const posts = getAllPosts();

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: safeDate(
            post.updated || post.published
        ),
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        ...blogUrls,
    ];
}
