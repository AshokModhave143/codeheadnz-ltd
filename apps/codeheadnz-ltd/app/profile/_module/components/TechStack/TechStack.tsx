import { PageSection } from '@common/components/PageSection';
import {
  DiAndroid,
  DiAngularSimple,
  DiCss3,
  DiDocker,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiSass,
  DiVisualstudio,
} from 'react-icons/di';

export const TechStack = () => {
  const techStackList = [
    {
      label: 'Node.js',
      Component: DiNodejs,
      className: 'devicon-nodejs-plain-wordmark colored',
    },
    {
      label: 'Angular.js',
      Component: DiAngularSimple,
      className: 'devicon-angularjs-plain colored',
    },
    {
      label: 'HTML5',
      Component: DiHtml5,
      className: 'devicon-html5-plain-wordmark colored',
    },
    {
      label: 'CSS3',
      Component: DiCss3,
      className: 'devicon-css3-plain-wordmark colored',
    },
    {
      label: 'Javascript',
      Component: DiJavascript1,
      className: 'devicon-javascript-plain colored',
    },
    {
      label: 'React.js',
      Component: DiReact,
      className: 'devicon-reactjs-plain colored',
    },
    {
      label: 'Git',
      Component: DiGit,
      className: 'devicon-git-plain colored',
    },
    {
      label: 'Sass',
      Component: DiSass,
      className: 'devicon-sass-original colored',
    },
    {
      label: 'VS code',
      Component: DiVisualstudio,
      className: 'devicon-visualstudio-plain colored',
    },
    {
      label: 'Github',
      Component: DiGithubBadge,
      className: 'devicon-github-original-wordmark colored',
    },
    {
      label: 'Android',
      Component: DiAndroid,
      className: 'devicon-android-plain-wordmark colored',
    },
    {
      label: 'Docker',
      Component: DiDocker,
      className: 'devicon-docker-plain colored',
    },
  ];
  return (
    <PageSection id="tech-stack">
      <div className="container mx-auto size-full flex flex-col items-center gap-4 px-4 py-8 sm:px-2 sm:py-12">
        <p className="text-3xl font-bold underline">Tech Stack</p>
        <p>{`Technologies I've been working with recently`}</p>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4:gap-6 md:grid-cols-6 md:gap-8">
          {techStackList.map(({ Component, label, className }) => (
            <Component
              key={label}
              className={
                className + ' h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32'
              }
            />
          ))}
        </div>
      </div>
    </PageSection>
  );
};
