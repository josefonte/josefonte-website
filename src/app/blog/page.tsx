import type { GetStaticProps, InferGetStaticPropsType } from "next";

import BlogCard from "@/components/me/blog-card";

const mockData = [
    {
        title: "Teste 1",
        pubDate: "2024-01-27 20:11:28",
        link: "https://medium.com/@josefonte/teste-1-blog-post-498acc2c6850?source=rss-1eb24fd770d9------2",
        description:
            "Introduction Artificial Intelligence (AI) has rapidly evolved from a futuristic concept to a reality that permeates our daily lives. Its impact on various industries and society as a whole is undeniable, and the continuous advancements in AI technology are reshaping the way we live and work. In this blog post, we will explore the current state of AI, its applications across different sectors, and the ethical considerations that accompany this transformative technology.",

        img: "https://cdn-images-1.medium.com/max/1024/1*BcWYmsZAO_6HWjAfK4_jQw.png",
    },
    {
        title: "Teste 2",
        pubDate: "2024-01-27 20:11:28",
        link: "https://cdn-images-1.medium.com/max/934/1*OAAUW9n1yUGbCvbCHRQ41A.png",
        description:
            "Introduction Artificial Intelligence (AI) has rapidly evolved from a futuristic concept to a reality that permeates our daily lives. Its impact on various industries and society as a whole is undeniable, and the continuous advancements in AI technology are reshaping the way we live and work. In this blog post, we will explore the current state of AI, its applications across different sectors, and the ethical considerations that accompany this transformative technology.",

        img: "https://cdn-images-1.medium.com/max/934/1*OAAUW9n1yUGbCvbCHRQ41A.png",
    },
    {
        title: "Teste 3",
        pubDate: "2024-01-27 20:11:28",
        link: "https://medium.com/@josefonte/teste-1-blog-post-498acc2c6850?source=rss-1eb24fd770d9------2",
        description:
            "Introduction Artificial Intelligence (AI) has rapidly evolved from a futuristic concept to a reality that permeates our daily lives. Its impact on various industries and society as a whole is undeniable, and the continuous advancements in AI technology are reshaping the way we live and work. In this blog post, we will explore the current state of AI, its applications across different sectors, and the ethical considerations that accompany this transformative technology.",

        img: "https://cdn-images-1.medium.com/max/1024/1*BcWYmsZAO_6HWjAfK4_jQw.png",
    },
];

async function getMediumPosts() {
    try {
        const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@josefonte",
            { method: "GET" }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching Medium posts:", error);
        throw error;
    }
}

type Posts = {
    status: string;
    feed: Feed;
    items: Item[];
};

interface Feed {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
}

interface Item {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: Record<string, unknown>;
    categories: string[];
}

function extractIMG(inputString: string) {
    const figureMatch = inputString.match(
        /<figure>.*?<img[^>]*\ssrc\s*=\s*["']([^"']*)["'][^>]*>.*?<\/figure>/
    );
    const srcAttribute = figureMatch ? figureMatch[1] : "";

    return srcAttribute;
}

export default async function Blog() {
    const posts: Posts = await getMediumPosts();

    return (
        <div>
            {posts.items.map((post, index) => (
                <BlogCard
                    key={index}
                    title={post.title}
                    description={post.description}
                    pubDate={post.pubDate}
                    link={post.link}
                    img={extractIMG(post.content)}
                    categories={post.categories}
                />
            ))}
        </div>
    );
}
