/* eslint-disable @next/next/no-img-element */
import { getProjects } from "@/app/_service/projects";
import { formatText } from "@/utils/formatText";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
    <div className="min-h-screen w-full flex flex-col items-center justify-start dark:bg-zinc-900">
      <div className="max-w-[73rem]">
        <h1 className="flex flex-col text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-4 text-left">
          Projetos
          <p className="text-sm text-zinc-500 font-extralight text-justify">
            Esses projetos foram desenvolvidos com o objetivo de aprender novas
            tecnologias e aprimorar as que já conheço, pois não consigo colocar
            em prática e publicar os códigos dos projetos que desenvolvo em meu
            trabalho, então decidi criar esses projetos pessoais.
          </p>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-left">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var">
              <CardBody
                className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.1] 
              dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {formatText(project.description, 10)}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
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
                    <div className="w-full h-48 bg-[#8257e6]">
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-base font-bold text-zinc-50">
                          No Cover Image
                        </p>
                      </div>
                    </div>
                  )}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      className={cn(
                        "bg-[#8257e6]/10 text-[#8257e6] hover:bg-[#8257e6]/20 transition-all w-[max-content] mr-1"
                      )}
                    >
                      {technology}
                    </Badge>
                  ))}
                </CardItem>
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
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
