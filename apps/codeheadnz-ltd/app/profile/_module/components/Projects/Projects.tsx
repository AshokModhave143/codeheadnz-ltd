import { ProjectCard } from '@common/components/ProjectCard';
import { projectList } from './data/projectList';

export const Projects = () => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-primary-50 to-secondary-50 pb-8 px-4">
      <div className="flex flex-col justify-center items-center ">
        <p className="text-4xl font-bold my-8 sm:my-10 underline">Projects</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {projectList.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
