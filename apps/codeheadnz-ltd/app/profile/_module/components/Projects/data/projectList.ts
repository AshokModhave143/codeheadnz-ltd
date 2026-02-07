import { ProjectCardProps } from '@common/components/ProjectCard';

export const projectList: ProjectCardProps[] = [
  {
    title: 'Document Generation Platform',
    associatedWith: 'Bank of New Zealand',
    description:
      'Enterprise platform supporting lending document creation, search, and onboarding data persistence.',
    responsibilities: [
      'Led frontend architecture, forms, and validations with modern React patterns.',
      'Built Spring Boot microservices to integrate internal systems and vendors.',
      'Improved performance and operational efficiency for high-volume processing.',
    ],
    respositoryLink: 'https://www.bnz.co.nz/',
    image: '/static/images/projects/placeholder_project.png',
    techStack: ['React', 'TypeScript', 'Spring Boot', 'AWS', 'Jotai'],
  },
  {
    title: 'BBX Checkout Experience',
    associatedWith: 'Serko Ltd.',
    description:
      'Checkout and payment experience for business travel accommodation booking.',
    responsibilities: [
      'Implemented PCI-compliant payment flows with secure iframes.',
      'Scaled frontend patterns in an NX monorepo with reusable components.',
      'Optimized conversion with experiment-driven UX improvements.',
    ],
    respositoryLink: 'https://www.serko.com/',
    image: '/static/images/projects/serko_ltd_bbx.png',
    techStack: ['Next.js', 'React', 'NX', 'React Query', 'Optimizely'],
  },
  {
    title: 'Secure Pay Platform',
    associatedWith: 'Air New Zealand',
    description:
      'Contact-center payment solution enabling secure card processing over the phone.',
    responsibilities: [
      'Implemented PCI workflows and tokenization integrations.',
      'Integrated Amazon Connect call flows and Azure B2C auth.',
      'Boosted call handling efficiency with improved UX flows.',
    ],
    respositoryLink: 'https://www.airnewzealand.co.nz/',
    image: '/static/images/projects/placeholder_project.png',
    techStack: ['Next.js', 'React', 'Azure B2C', 'AWS', 'React Hook Form'],
  },
  {
    title: 'GenAI Contact Center Chatbot',
    associatedWith: 'Air New Zealand',
    description:
      'LLM-powered chatbot for agents, trained on internal documentation.',
    responsibilities: [
      'Integrated Azure OpenAI with streaming response parsing.',
      'Built a reusable platform for multiple LLM datasets.',
      'Implemented prompt refinement and suggestion workflows.',
    ],
    respositoryLink: 'https://www.airnewzealand.co.nz/',
    image: '/static/images/projects/placeholder_project.png',
    techStack: ['Next.js', 'Azure OpenAI', 'RxJS', 'React Query'],
  },
  {
    title: 'Business Booking Platform',
    associatedWith: 'Serko Ltd.',
    description:
      'End-to-end booking platform for flights, hotels, and car rentals.',
    responsibilities: [
      'Designed booking flows and reusable UI patterns.',
      'Integrated Google Maps and OpenAPI typed clients.',
      'Collaborated on UX to scale a design system-driven UI.',
    ],
    respositoryLink: 'https://www.serko.com/',
    image: '/static/images/projects/placeholder_project.png',
    techStack: ['React', 'Next.js', 'NX', 'Orval', 'Google Maps API'],
  },
  {
    title: 'KiwiSaver + Investment Platform',
    associatedWith: 'ASB Bank',
    description:
      'Digital investment and retirement platform for KiwiSaver customers.',
    responsibilities: [
      'Built customer-facing React apps with secure financial workflows.',
      'Integrated .NET Core APIs for transactions and fund management.',
      'Adopted design system components for consistent UX.',
    ],
    respositoryLink: 'https://www.asb.co.nz/kiwisaver',
    image: '/static/images/projects/placeholder_project.png',
    techStack: ['React', 'Redux', 'TypeScript', '.NET Core'],
  },
];
