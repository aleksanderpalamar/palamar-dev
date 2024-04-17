import { getProjects } from "@/app/_service/projects";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formatText } from "@/utils/formatText";
import { Title } from "./title";

export const runtime = "edge";

export const revalidate = 60; // 60 seconds
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export const ProjectsComponentServer = async () => {
  const projects = await getProjects();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start">
      <div className="max-w-[73rem]">
        <Title
          
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-left mt-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition-all rounded overflow-hidden
              flex flex-col space-y-4"
            >
              {project.coverImage ? (
                <Dialog>
                  <DialogTrigger>
                    {Image ? (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        width={1000}
                        height={1000}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <video
                        src={project.coverImage}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    )}
                  </DialogTrigger>
                  <DialogContent className="bg-white text-zinc-950 p-0 overflow-hidden max-w-6xl">
                    {Image ? (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl animate-fade"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <video
                        src={project.coverImage}
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl animate-fade"
                        autoPlay
                        loop
                      />
                    )}
                  </DialogContent>
                </Dialog>
              ) : (
                <div className="w-full h-full bg-[#8257e6]">
                  <div className="w-full h-60 flex items-center justify-center">
                    <p className="text-base font-bold text-zinc-50 flex flex-col">
                      No Cover Image
                      <span className="text-sm text-zinc-200">
                        {formatText(project.title, 2)}
                      </span>
                    </p>
                  </div>
                </div>
              )}
              <div className="p-4 space-y-4">
                <h2 className="text-base font-bold">{project.title}</h2>
                <p className="text-sm text-zinc-500">{project.description}</p>
                <div className="flex flex-wrap gap-2 items-center">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      className={cn(
                        "bg-[#48424e] text-[#8257e6] hover:bg-[#8257e6]/20 transition-all w-[max-content] mr-1"
                      )}
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-20">
                  <Link
                    href={project.href}
                    className="px-4 py-2 rounded-xl text-xs font-normal 
                    dark:text-white"
                    target="_blank"
                  >
                    Live →
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black 
                    text-white text-xs font-bold"
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
