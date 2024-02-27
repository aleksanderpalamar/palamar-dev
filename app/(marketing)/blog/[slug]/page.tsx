/* eslint-disable @next/next/no-img-element */
import { getPost } from "@/app/_service/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  return (
    <div className="m-auto bg-white dark:bg-[#1f1f1f] min-h-screen flex items-start justify-center">
      <div className="max-w-6xl py-14 md:py-20 px-4 text-justify animate-fade space-y-4">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-14">
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
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside text-sm text-justify" {...props}>
                {props.children}
              </ol>             
            ),           
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-[#8257e6] px-3 py-2 
                my-4 font-light bg-[#48424e] text-sm text-ellipsis"
                {...props}
              />
            ),
            img: ({ node, ...props }: any) => (
              <img
                className="w-full"
                src={props.src}
                alt={props.alt}
                {...props}
              />
            ),
            code: ({ node, ...props }) => (
              <code
                className="text-[#8257e6] bg-[#48424e] px-1 py-0.5 rounded"
                {...props}
              />
            ),
            strong: ({ node, ...props }) => (
              <strong className="text-[#8257e6]" {...props} />
            ),
            p: ({ node, ...props }) => <p className="my-4" {...props} />,
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside" {...props} />
            ),
            li: ({ node, ...props }) => <li className="my-2" {...props} />,
            a: ({ node, ...props }) => (
              <a
                className="text-[#8257e6] hover:underline underline-offset-4"
                href={props.href}
                {...props}
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
