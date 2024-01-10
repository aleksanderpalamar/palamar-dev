/* eslint-disable @next/next/no-img-element */
import { getPosts } from "@/app/_service/blog";
import { getProjects } from "@/app/_service/projects";
import Link from "next/link";
import { FaCode, FaCodeBranch, FaReadme } from "react-icons/fa6";

export const revalidate = 60; // 60 seconds
export const dynamic = "force-dynamic";

export const Heroes = async () => {  
  const project = await getProjects();
  const post = await getPosts();
  const ProjectCounter = project.length;
  const PostCounter = post.length;  

  return (
    <div className="w-full flex flex-col md:justify-start mb-14 space-y-4">
      <div className="flex items-start justify-start">
        <h3 className="text-lg uppercase flex items-center">
          <FaCodeBranch className="w-6 h-6 mr-2" />
          Últimos commits
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">        
        <Link href="/projects">
          <div
            className="w-[258px] h-[160px] bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition duration-500 rounded-xl overflow-hidden
              flex flex-col relative"
          >
            <img
              src="https://cdn.discordapp.com/attachments/811800332006457356/1188820804520132638/e9a8244b217a8cb45e0425252c6d4606.jpg?ex=659beaa7&is=658975a7&hm=57970c20a79e1bd5358ee984c1e3534aadd5a7a46f9fc863e320ded944259022&"
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute top-0 w-full h-full flex items-start justify-between p-2">
              <div className="bg-zinc-50 p-2 rounded flex items-center text-zinc-950 hover:bg-zinc-300">
                <FaCode className="w-6 h-6" />
              </div>
              <p>{ProjectCounter} Projetos</p>
            </div>
          </div>
        </Link>
        <Link href="/blog">
          <div
            className="w-[258px] h-[160px] bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition duration-500 rounded-xl overflow-hidden
              flex flex-col relative"
          >
            <img
              src="https://cdn.discordapp.com/attachments/811800332006457356/1188820804520132638/e9a8244b217a8cb45e0425252c6d4606.jpg?ex=659beaa7&is=658975a7&hm=57970c20a79e1bd5358ee984c1e3534aadd5a7a46f9fc863e320ded944259022&"
              alt=""
              className="w-full h-full object-cover opacity-30"
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
    </div>
  );
};