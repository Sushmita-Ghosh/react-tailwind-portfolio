import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    project.category.includes(filter)
  );

  console.log(projects[0].category.includes("All"));
  console.log(filter);

  return (
    <section className="mt-20 px-10">
      <h2 className="text-3xl font-burtons px-10 text-center mb-5">Projects</h2>
      <div className="flex justify-center gap-2 flex-row items-center py-6">
        <button
          onClick={() => setFilter("All")}
          className="rounded-full px-6 py-3 border-2 border-slate-300 hover:border-purple-400 cursor-pointer"
        >
          All
        </button>
        <button
          onClick={() => setFilter("Frontend")}
          className="rounded-full px-6 py-3 border-2 border-slate-300 hover:border-purple-400 cursor-pointer"
        >
          Frontend
        </button>
        <button
          onClick={() => setFilter("FullStack")}
          className="rounded-full px-6 py-3 border-2 border-slate-300 hover:border-purple-400 cursor-pointer"
        >
          FullStack
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, id) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
