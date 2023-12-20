import { getPost } from "@/app/_service/blog";
import { CodeBlock } from "@/components/code-block";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  return (
    <div className="m-auto bg-white dark:bg-zinc-900 min-h-screen flex items-start justify-center">
      <div className="max-w-3xl py-14 md:py-20 px-4 text-justify animate-fade">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {post.title}
        </h1>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ node, ...props }) => (
              <h2
                className="text-2xl text-[#8257e6] font-semibold"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl text-[#8257e6] font-bold" {...props} />
            ),
            p: ({ node, ...props }) => <p className="text-sm" {...props} />,
            strong: ({ node, ...props }) => (
              <strong className="font-semibold text-[#8257e6]" {...props} />
            ),
            em: ({ node, ...props }) => <em {...props} />,
            li: ({ node, className, ...props }) => {
              const match = /(\d+\.)/.exec(className || "");
              return (
                <li
                  className={cn(
                    "list-decimal list-inside list-item text-sm",
                    className && match
                      ? "ml-4"
                      : "list-disc list-inside list-item"
                  )}
                  {...props}
                >
                  {props.children}
                </li>
              );
            },
            a: ({ node, ...props }) => (
              <a
                className="text-[#8257e6] hover:underline underline-offset-4"
                {...props}
              />
            ),
            code: ({ node, inline, className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <CodeBlock
                  className="text-sm"
                  language={match[1]}
                  value={String(children).replace(/\n$/, "")}
                  {...props}
                />
              ) : (
                <code className="text-sm bg-[#8257e6]/10 text-[#8257e6]" {...props} />
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
