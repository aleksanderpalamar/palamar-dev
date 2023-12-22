import { getProjects } from "@/app/_service/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GithubIcon, Globe } from "lucide-react";
import Image from "next/image";

const Projects = async () => {
  const projects = await getProjects();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start dark:bg-zinc-900">
      <div className="max-w-[1280px] py-14 md:py-20">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 text-center mb-14 p-4">
          Projetos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-left">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition-all rounded overflow-hidden
              flex flex-col space-y-4"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="flex items-center justify-between w-full p-2">
                <h1>{project.title}</h1>
                {project.status.map((status) => (
                  <div key={status}>
                    <Badge
                      className={cn(
                        "bg-[#8257e6]/10 text-[#8257e6] hover:bg-[#8257e6]/20 transition-all w-[max-content] rounded-full p-1 text-xs"
                      )}
                    >
                      {status}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="p-2">
                <p className="text-sm text-gray-300 truncate">
                  {project.description.rich_text.map((text) => text.plain_text)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 items-center p-2">
                {project.tchenologies.map((tchenology) => (
                  <Badge
                    key={tchenology}
                    className={cn(
                      "bg-[#8257e6]/10 text-[#8257e6] hover:bg-[#8257e6]/20 transition-all w-[max-content] rounded-full p-1 text-xs"
                    )}
                  >
                    {tchenology}
                  </Badge>
                ))}
                <div className="flex items-center justify-between w-full mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-x-2 p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Github
                  </a>
                  <a
                    href={project.href}
                    target="_blank"
                    className="flex items-center gap-x-2 p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
                  >
                    <Globe className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
