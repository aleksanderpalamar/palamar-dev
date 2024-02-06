/* eslint-disable @next/next/no-img-element */
import { getPosts } from "@/app/_service/blog";
import { getProjects } from "@/app/_service/projects";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaReadme } from "react-icons/fa6";
import { Heading } from "./heading";

export const runtime = 'edge';

export const revalidate = 60; // 60 seconds
export const dynamic = "force-dynamic";

export const Heroes = async () => {
  const project = await getProjects();
  const post = await getPosts();

  const ProjectCounter = project.length;
  const PostCounter = post.length;

  return (
    <section className="container flex flex-col space-y-8">
      <Heading />
      <Separator />
      <h3 className="text-2xl font-bold" aria-label="LATEST UPDATES">
        LATEST UPDATES
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <Link href="/projects">
          <div
            className="w-[258px] h-[160px] bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition duration-500 rounded-xl overflow-hidden
              flex flex-col relative"
          >
            <Image
              src="https://cdn.discordapp.com/attachments/811800332006457356/1188820804520132638/e9a8244b217a8cb45e0425252c6d4606.jpg?ex=659beaa7&is=658975a7&hm=57970c20a79e1bd5358ee984c1e3534aadd5a7a46f9fc863e320ded944259022&"
              alt=""
              width={258}
              height={160}
              className="w-full h-full object-cover opacity-30"
              loading="lazy"
              decoding="async"
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
              src="https://cdn.discordapp.com/attachments/811800332006457356/1188820804520132638/e9a8244b217a8cb45e0425252c6d4606.jpg?ex=659beaa7&is=658975a7&hm=57970c20a79e1bd5358ee984c1e3534aadd5a7a46f9fc863e320ded944259022&"
              alt=""
              width={258}
              height={160}
              className="w-full h-full object-cover opacity-30"
              loading="lazy"
              decoding="async"
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
      <Separator />
    </section>
  );
};
