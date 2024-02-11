import { ProjectCardProps } from '@common/components/ProjectCard';

export const projectList: ProjectCardProps[] = [
  {
    title: 'Booking for business experience (BBX)',
    associatedWith: 'Serko Ltd.',
    description:
      'React web application providing solution for end-to-end managed business booking of flight, car, and hotels.',
    responsibilities: [
      `▪ Design and development of project`,
      `▪ Setup the foundation and environment for application`,
      `▪ Review the UX and map it to technical requirement.`,
      `▪ Develop the UI and backend integration.
        Technology`,
      `▪ ReactJS, NextJs, NX Console monorepo framework`,
      `▪ React query, axios, Orval openAPI spec generator.`,
      `▪ Monitoring tools like new relic, sumo logic, azure beanstalk`,
    ],
    respositoryLink: 'https://business.booking.com/en-us/',
    image: '/static/images/projects/serko_ltd_bbx.png',
    techStack: ['React.js', 'Next.js', 'Typescript', 'React Query', 'Axios'],
  },
];
