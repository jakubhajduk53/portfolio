import { projectsDescriptions } from "../data/descriptions";
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
      <div className="grid grid-cols-3 gap-10 self-start">
        {projectsDescriptions.map((project) => {
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
