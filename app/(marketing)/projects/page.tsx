import { ProjectsListMap } from "@/components/ProjectsList/projects-list-map";
import { CTA } from "../_components/cta";


const Projects = () => {

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start dark:bg-zinc-900">
      <div className="max-w-6xl p-2 mt-20 space-y-4">
        <ProjectsListMap />
        <CTA />
      </div>
    </div>
  );
};

export default Projects;
