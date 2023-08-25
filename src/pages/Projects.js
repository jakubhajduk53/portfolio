import { projectsData } from "../data";
import { Project } from "../components";

function Projects() {
  return (
    <div
      id="projects"
      className="grid justify-center place-items-center w-full h-screen"
    >
      <div className="self-end mb-5 text-xl md:text-3xl row-span-1">
        My projects
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 self-start overflow-y-scroll md:overflow-auto">
        {projectsData.map((project) => {
          return (
            <Project
              key={project.value}
              value={project.value}
              image={project.image}
              description={project.description}
              site={project.site}
              repository={project.repository}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
