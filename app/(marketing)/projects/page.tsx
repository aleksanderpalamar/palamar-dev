import { CTA } from "../_components/cta";
import { ProjectsComponentServer } from "../_components/projects-component-server";

const Projects = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start">
      <div className="max-w-6xl p-2 space-y-4">
        <ProjectsComponentServer />
        <CTA />
      </div>
    </div>
  );
};

export default Projects;
