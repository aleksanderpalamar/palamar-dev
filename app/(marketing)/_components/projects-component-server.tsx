/* eslint-disable @next/next/no-img-element */
import { getProjects } from "@/app/_service/projects";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { formatText } from "@/utils/formatText";
import Link from "next/link";

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
    <div className="min-h-screen w-full flex flex-col items-center justify-start dark:bg-zinc-900">
      <div className="max-w-6xl p-2 space-y-4">
        <h1 className="text-2xl flex flex-col font-bold text-zinc-900 dark:text-zinc-50 text-center mt-40">
          Projects
          <span className="text-sm text-zinc-500 font-normal">
            Esses projetos foram desenvolvidos com o intuito de aprender novas
            tecnologias e aprimorar as que já conheço, pois como não posso
            colocar em prática e divulgar os códigos dos projetos que desenvolvo
            no meu trabalho, então decidi criar esses projetos pessoais.
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-left">
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
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </DialogTrigger>
                  <DialogContent className="bg-white text-zinc-950 p-0 overflow-hidden max-w-6xl">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover animate-fade"
                    />
                  </DialogContent>
                </Dialog>
              ) : (
                <div className="w-full h-48 bg-[#8257e6]">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-base font-bold text-zinc-50">
                      No Cover Image
                    </p>
                  </div>
                </div>
              )}
              <div className="p-4 space-y-4">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p className="text-sm">{formatText(project.description, 10)}</p>
                <div className="flex flex-wrap gap-2 items-center">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      className={cn(
                        "bg-[#8257e6]/10 text-[#8257e6] hover:bg-[#8257e6]/20 transition-all w-[max-content]"
                      )}
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href={project.githubUrl}
                    className="p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
                  >
                    Github
                  </Link>
                  <Link
                    href={project.href}
                    className="p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
                  >
                    Visit Site
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
