"use client";

import Link from "next/link";
import { ActionTooltip } from "../action-tooltip";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import { formatText } from "@/utils/formatText";
import { ArrowRight, LinkIcon } from "lucide-react";

interface BlogPostProps {
  title?: string;
  body: string;
  created_at: string;
  number?: string;
}

export const ArticleListMap = () => {
  const [posts, setPosts] = useState<BlogPostProps[]>([] as BlogPostProps[]);

  const fetchPosts = async (query = "") => {
    const res = await fetch(
      `https://api.github.com/search/issues?q=${
        query ? query : ""
      }%20repo:${"aleksanderpalamar"}/Github-blog-issues`
    );
    const data = await res.json();
    setPosts(data.items);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ScrollArea className="flex-1 px-3 py-4 gap-4 w-full">
      {posts.map((post) => (
        <Card
          key={post.number}
          className="grid md:grid-cols-2 lg:grid-cols-3 dark:bg-[#313338] hover:bg-violet-100/25 dark:hover:bg-zinc-700/75 overflow-hidden mt-2 w-full"
        >
          <CardHeader className="flex items-start justify-center">
            <Link href={`/posts/${post.number}`}>
              <CardTitle>{post.title}</CardTitle>
            </Link>
          </CardHeader>
          <CardContent>
            <CardDescription className="flex text-justify items-center justify-center p-3">{formatText(post.body, 50)}</CardDescription>
          </CardContent>
          <CardFooter className="flex items-center lg:ml-auto lg:w-[64px] bg-violet-100 dark:bg-zinc-800 px-3 py-4 gap-4">
            <ActionTooltip label={`${post.title}`} side="top" align="center">
              <Link
                href={`/posts/${post.number}`}
                className="text-violet-500 hover:underline text-xs"
              >
                <LinkIcon className="h-9 w-9 mr-2 hover:bg-violet-500 hover:text-white p-2 rounded" />
              </Link>
            </ActionTooltip>
          </CardFooter>
        </Card>
      ))}
    </ScrollArea>
  );
};
