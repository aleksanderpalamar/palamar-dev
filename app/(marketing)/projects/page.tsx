import { ProjectsListMap } from "@/components/ProjectsList/projects-list-map";


const Projects = () => {

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start dark:bg-zinc-900">
      <div className="max-w-[1280px] py-14 md:py-20">
        <ProjectsListMap />        
      </div>
    </div>
  );
};

export default Projects;
