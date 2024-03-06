/* eslint-disable @next/next/no-img-element */
import { getPosts } from "@/app/_service/blog";
import { getProjects } from "@/app/_service/projects";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaReadme } from "react-icons/fa6";

export const runtime = 'edge';

export const revalidate = 60; // 60 seconds
export const dynamic = "force-dynamic";

export const Heroes = async () => {
  const project = await getProjects();
  const post = await getPosts();

  const ProjectCounter = project.length;
  const PostCounter = post.length;

  return (
    <section className="flex flex-col w-full">      
      <h3 className="text-2xl font-bold" aria-label="LATEST UPDATES">
        Últimas atualizações
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 mb-2">
        <Link href="/projects">
          <div
            className="w-[258px] h-[160px] bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition duration-500 rounded-xl overflow-hidden
              flex flex-col relative"
          >
            <Image
              src="https://cdn.discordapp.com/attachments/811800332006457356/1214974314512908350/image-5.png?ex=65fb1001&is=65e89b01&hm=5c42a78fd4236d8bb4aa9f589d12414d05079b5b07aeb689a701f356f6bfda8e&"
              alt=""
              width={258}
              height={160}
              className="w-full h-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="absolute top-0 w-full h-full flex items-start justify-between p-2">
              <div className="bg-zinc-50 p-2 rounded flex items-center text-zinc-950 hover:bg-zinc-300">
                <FaCode className="w-6 h-6" />
              </div>
              <p>{ProjectCounter} Projects</p>
            </div>
          </div>
        </Link>
        
        <Link href="/blog">
          <div
            className="w-[258px] h-[160px] bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition duration-500 rounded-xl overflow-hidden
              flex flex-col relative"
          >
            <Image
              src="https://cdn.discordapp.com/attachments/811800332006457356/1214974210070417539/image-6.png?ex=65fb0fe8&is=65e89ae8&hm=d2bee8773a760be8ee26d7524bcf01d6dcc6933dc23e08a95f690fe06c3deac8&"
              alt=""
              width={258}
              height={160}
              className="w-full h-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="absolute top-0 w-full h-full flex items-start justify-between p-2">
              <div className="bg-zinc-50 p-2 rounded flex items-center text-zinc-950 hover:bg-zinc-300">
                <FaReadme className="w-6 h-6" />
              </div>
              <p>{PostCounter} Posts</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
