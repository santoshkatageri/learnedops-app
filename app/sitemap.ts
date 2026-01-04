import { MetadataRoute } from "next";
import { getAllPosts } from "./lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();

    const blogUrls = posts.map((post) => ({
        url: `https://learnedops.app/blog/${post.slug}`,
        lastModified: new Date(post.date),
    }));

    return [
        {
            url: "https://learnedops.app",
            lastModified: new Date(),
        },
        {
            url: "https://learnedops.app/blog",
            lastModified: new Date(),
        },
        ...blogUrls,
    ];
}
