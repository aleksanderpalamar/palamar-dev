import { getPosts } from "@/app/_service/blog";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/formatDate";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center dark:bg-zinc-900">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl 
          dark:shadow-2xl hover:scale-105 transition-all rounded overflow-hidden
          flex flex-col p-4 space-y-4"
          >
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <div className="flex flex-wrap gap-2 items-center">
            Tags:
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-[#8257e6]/10 text-[#8257e6] 
                hover:bg-[#8257e6]/20 transition-all
                w-[max-content]"
              >
                {tag}
              </Badge>
            ))}
            </div>
            <p className="text-xs text-zinc-500">              
              <span>{formatDate(post.createdAt)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
