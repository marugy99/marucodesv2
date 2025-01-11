import React from "react";
import {
  CodeBracketSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Projects({ projects }) {
  const sortedProjects = projects.sort(function (a, b) {
    return new Date(b.data.created_at) - new Date(a.data.created_at);
  });
  const [activeProject, setActiveProject] = React.useState(
    sortedProjects[0].data
  );

  const handleProjectChange = (value) => {
    const project = sortedProjects.find(
      (project) => project.data.title === value
    );
    setActiveProject(project.data);
  };
  return (
    <div className="flex flex-col gap-4 text-gray-100 md:flex-row">
      <div className="relative md:hidden">
        <label htmlFor="projects" className="sr-only">
          Select a project to view details
        </label>
        <select
          name="projects"
          id="projects"
          onChange={(e) => handleProjectChange(e.target.value)}
          className="w-full p-2 rounded-lg appearance-none cursor-pointer bg-slate-700"
        >
          {sortedProjects.map(({ data: project }) => (
            <option
              key={project.title}
              defaultValue={project.title === activeProject.title}
              value={project.title}
            >
              {project.title}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="absolute w-5 pointer-events-none top-[10px] right-2 text-slate-500" />
      </div>

      <nav
        aria-labelledby="projects-navigation"
        className="flex-1 hidden md:block"
      >
        <ul className="space-y-1">
          {sortedProjects.map(({ data: project }) => (
            <li
              key={project.title}
              aria-current={project.title === activeProject.title}
            >
              <button
                onClick={() => setActiveProject(project)}
                type="button"
                className={`${
                  activeProject.title === project.title ? "bg-slate-600" : " "
                } block text-left w-full gap-2 p-2 rounded-md`}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-[1.5] text-base">
        <CodeBracketSquareIcon className="w-16 h-16 sm:w-20 sm:h-20 text-slate-500" />
        <h1 className="mt-4 text-xl font-semibold">{activeProject.title}</h1>
        <p className="text-slate-400">{activeProject.description}</p>
        <ul className="mt-4 space-y-4">
          <li>
            <p className="text-lg font-bold">Stack</p>
            <p className="text-slate-400">{activeProject.stack}</p>
          </li>
          <li>
            <p className="text-lg font-bold">Repo</p>
            <a
              href={activeProject.repo}
              target="_blank"
              className="underline text-slate-400"
            >
              GitHub
            </a>
          </li>
          <li>
            <p className="text-lg font-bold">Live site</p>
            <a
              href={activeProject.site}
              target="_blank"
              className="underline text-slate-400"
            >
              {activeProject.site}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
