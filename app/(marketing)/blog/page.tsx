/* eslint-disable @next/next/no-img-element */
import { getPosts } from "@/app/_service/blog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/formatDate";
import { Metadata } from "next";
import Link from "next/link";
import { formatText } from "@/utils/formatText";
import { CTA } from "../_components/cta";

export const metadata: Metadata = {
  title: "Blog",
};

export const revalidate = 60; // 60 seconds
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start dark:bg-[#1f1f1f]">
      <div className="max-w-[73rem] p-2 space-y-4">
        <h1 className="flex flex-col text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-4 text-left">
          Blog
          <p className="text-sm text-zinc-500 font-normal text-justify">
            Esses são os meus artigos falando sobre tecnologia e programação,
            pois é uma forma que eu encontrei de compartilhar meus conhecimentos.
          </p>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-left">
          {posts.length === 0 && (
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 text-center mb-14">
                Nenhum post encontrado
              </p>
            </div>
          )}
          {posts.map((post) => (
            <div
              key={post.id}
              className="card bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition-all rounded overflow-hidden
              flex flex-col space-y-4"
            >
              {post.coverImage ? (
                <div className="w-full h-60">
                  <img
                    src={post.coverImage}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-full h-60 bg-[#8257e6]">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-base font-bold text-zinc-50">
                      No Cover Image
                    </p>
                  </div>
                </div>
              )}
              <div className="p-4 space-y-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:underline underline-offset-4"
                >
                  <h1 className="text-base font-bold">
                    {formatText(post.title, 10)}
                  </h1>
                </Link>
                <div className="flex flex-wrap gap-2 items-center">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className={cn(
                        "bg-[#48424e] text-[#8257e6] hover:bg-[#8257e6]/20 transition-all w-[max-content]"
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-end mx-auto ">
                  <p className="text-xs text-zinc-500 flex items-center">
                    <span>{formatDate(post.createdAt)}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CTA />
      </div>
    </div>
  );
};

export default BlogPage;
