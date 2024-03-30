import { ProjectCardProps } from '@common/components/ProjectCard';

const employerAirNewzelandProjects: ProjectCardProps[] = [
  {
    title: 'Customer feedback',
    associatedWith: 'Air Newzealand Limited',
    description:
      'React/Nextjs web application providing solution for end-to-end for customer feedback, complaints, refunds and compliments. ',
    responsibilities: [
      `▪ Design and development of project`,
      `▪ Review the UX and map it to technical requirement.`,
      `▪ Develop the UI and backend integration.`,
      `Technology`,
      `▪ ReactJS, NextJs, NX Console monorepo framework`,
    ],
    respositoryLink: 'https://business.booking.com/en-us/',
    image: '/static/images/projects/serko_ltd_bbx.png',
    techStack: ['React.js', 'Next.js', 'Typescript', 'React Query', 'Axios'],
  },
];

const employerSerkoLtdProjects: ProjectCardProps[] = [
  {
    title: 'Booking for business experience (BBX)',
    associatedWith: 'Serko Ltd.',
    description:
      'React web application providing solution for end-to-end managed business booking of flight, car, and hotels.',
    responsibilities: [
      `▪ Design and development of project`,
      `▪ Setup the foundation and environment for application`,
      `▪ Review the UX and map it to technical requirement.`,
      `▪ Develop the UI and backend integration.`,
      `Technology`,
      `▪ ReactJS, NextJs, NX Console monorepo framework`,
      `▪ React query, axios, Orval openAPI spec generator.`,
      `▪ Monitoring tools like new relic, sumo logic, azure beanstalk`,
    ],
    respositoryLink: 'https://www.airnewzealand.co.nz/feedback/',
    image: '/static/images/projects/placeholder_project.png',
    techStack: [
      'React.js',
      'Next.js',
      'Typescript',
      'React Query',
      'Axios',
      'Docker',
      'Kubernetes',
      'Tanstack Query',
    ],
  },
  {
    title: 'Zeno booking experience',
    associatedWith: 'Serko Ltd.',
    description:
      'Travel domain project, working on enhancing the feature functionalities, doing bug fixes and improving performance.',
    responsibilities: ['Design and development of project'],
    respositoryLink: 'https://zeno.com/',
    image: '/static/images/projects/placeholder_project.png',
    techStack: ['React.js', 'Next.js', 'Typescript', 'React Query', 'Axios'],
  },
];

const employerDatacomProjects: ProjectCardProps[] = [
  {
    title: 'Dashcam (mobile app)',
    associatedWith: 'Datacom Systems Ltd. (Client: ERoad)',
    description:
      'Designed and developed a React native mobile application providing solution for logistic company for tracking the vehicle and tracking the driver. The application is installed as a dashcame used in logistic truck and used collect the driver statistics and apply the rules and regulations.',
    responsibilities: [
      `▪ Design and development of project`,
      `▪ Review the UX and map it to technical requirement.`,
      `▪ Develop the UI and backend integration.`,
      `Technology`,
      `▪ ReactJS, React native`,
    ],
    respositoryLink: 'https://www.eroad.co.nz/solutions/hardware/',
    image: '/static/images/projects/placeholder_project.png',
    techStack: ['React.js', 'React native', 'Typescript', 'Axios'],
  },
];

const employerAsbBankProjects: ProjectCardProps[] = [
  {
    title:
      'Kiwisaver and investment fund Application | Wealth central | Online trading platform',
    associatedWith: 'ASB Bank Limited',
    description: `Kiwisaver and investments funds are application that allows kiwi residents to invest, save and grow their wealth. Also, to forecast and prepare for future goals, see the wealth grow.
      Wealth central does show the investments in the past and current in graphical format.
      Online trading platform allows t buy, cancel and sell the securities and can create a portfolio.`,
    responsibilities: [
      `▪ Design and development of project`,
      `▪ Review the UX and map it to technical requirement.`,
      `▪ Develop the UI and backend integration.`,
    ],
    respositoryLink: 'https://www.asb.co.nz/kiwisaver',
    image: '/static/images/projects/placeholder_project.png',
    techStack: [
      'React.js',
      'React hook form',
      'Typescript',
      'Redux toolkit',
      'Redux',
    ],
  },
];

const employerCentelonProjects: ProjectCardProps[] = [
  {
    title: 'Action planner | MyDhan | Community connect',
    associatedWith: 'Centelon Limited',
    description: `Worked as Senior Developer on digital transformation projects by defining and implementing digital strategies, React-Redux and React based web applications, MEAN stack based responsive web design, HTML5 solutions.`,
    responsibilities: [
      `▪ Responsible for requirement analysis, architecture, implementation, unit testing and deployment`,
      `▪ Mentoring and guiding team of 4 in the application development`,
      `▪ Developing robust, readable and optimized code in ReactJs, NodeJs.`,
      `▪ Exploring emerging technologies in market`,
      `▪ Development time estimation`,
    ],
    respositoryLink: 'https://centelonsolutions.com/',
    image: '/static/images/projects/placeholder_project.png',
    techStack: [
      'React.js',
      'React hook form',
      'Typescript',
      'Redux toolkit',
      'Redux',
      'Node.js',
      'Mongo DB',
    ],
  },
];

const employerFISGlobalSolutionsProjects: ProjectCardProps[] = [
  {
    title: 'Securities360 | FIX | OASYS | Mutual fund market tool',
    associatedWith: 'FIS Global Solutions Limited',
    description: `Worked as Senior Engineer - Product Development. I was part of core development team to develop secuirties360 application and migrate leagacy applet java UI to AngularJs and HTML5. `,
    responsibilities: [
      `- Responsible for writing optimized code, unit testing, documentation and deployment.`,
      `- Securities360 project base and envionrment set up.`,
      `- Migrating applet Java UI screens to AngularJs and HTML5. Rebuild the functionality.`,
      `- SSO integration with Securities360.`,
      `- Leveraged Organization responsive UI framework to build product`,
      `- Exposing the application for integration by other products in group, maintain session and authentication.`,
      `- Written middleware for secuirity and consumed Restful API.`,
      `- Written Code to connect to Tandem nonstop server using RPC tool.`,
      `- Managed converting COBOL screen to HTML and Java by using tool utility by HP.`,
      `- Key role in database migration activity between servers at different locations.`,
      `- Involved in report migration activity.`,
      `- Responsible for documenting all the code changes, deployments or change controls.`,
    ],
    respositoryLink: 'https://www.fisglobal.com/',
    image: '/static/images/projects/placeholder_project.png',
    techStack: [
      'HTML5',
      'Css',
      'Spring boot',
      'Java',
      '.Net',
      'C++',
      'Spring MVC',
      'Apache Tomcat',
      'FIX protocol',
    ],
  },
];

export const projectList: ProjectCardProps[] = [
  ...employerAirNewzelandProjects,
  ...employerSerkoLtdProjects,
  ...employerDatacomProjects,
  ...employerAsbBankProjects,
  ...employerCentelonProjects,
  ...employerFISGlobalSolutionsProjects,
];
