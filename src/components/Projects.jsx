import React from "react";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

export default function Projects({ projects }) {
  const sortedProjects = projects.sort(function (a, b) {
    return new Date(b.data.created_at) - new Date(a.data.created_at);
  });
  const [activeProject, setActiveProject] = React.useState(
    sortedProjects[0].data
  );
  return (
    <div className="grid grid-cols-[250px,1fr] gap-4 text-gray-100">
      <nav aria-labelledby="projects-navigation">
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
      <div>
        <CodeBracketSquareIcon className="w-20 h-20 text-slate-500" />
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
              className="text-slate-400 hover:underline"
            >
              {activeProject.repo}
            </a>
          </li>
          <li>
            <p className="text-lg font-bold">Live site</p>
            <a
              href={activeProject.site}
              target="_blank"
              className="text-slate-400 hover:underline"
            >
              {activeProject.site}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
