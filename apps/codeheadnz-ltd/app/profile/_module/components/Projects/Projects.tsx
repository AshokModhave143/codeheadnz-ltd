import { ProjectCard } from '@common/components/ProjectCard';
import { projectList } from './data/projectList';
import { PageSection } from '@common/components/PageSection';
import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { AnchorJumpButton } from '@common/components/AnchorJumpButton';

export const Projects = () => {
  return (
    <PageSection id={PROFILE_PAGE_SECTION_IDS.projects}>
      <div className="container mx-auto size-full h-auto bg-gradient-to-r from-primary-50 to-secondary-50 pb-8 px-4">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-4xl font-bold my-8 sm:my-10 underline">Projects</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {projectList.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      <AnchorJumpButton href={`#${PROFILE_PAGE_SECTION_IDS.contact}`} />
    </PageSection>
  );
};
