import { PageSection } from '@common/components/PageSection';
import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { Card, CardBody, Chip, Divider } from '@heroui/react';

const experiences = [
  {
    company: 'Bank of New Zealand',
    role: 'Senior Full Stack Developer',
    period: 'Apr 2025 - Present',
    location: 'Auckland, NZ',
    summary:
      'Leading the document generation platform for home lending with React + TypeScript and Spring Boot services.',
    highlights: [
      'Owned frontend architecture, complex forms, and API integrations for a high-volume doc processing platform.',
      'Integrated Spring Boot microservices with internal systems and third-party providers.',
      'Improved operational efficiency and code quality through reviews and standards.',
    ],
    tech: ['React', 'TypeScript', 'Jotai', 'Spring Boot', 'AWS', 'OpenShift'],
  },
  {
    company: 'Serko Ltd.',
    role: 'Senior Front-End Engineer',
    period: 'Oct 2024 - Mar 2025',
    location: 'Auckland, NZ',
    summary:
      'Built checkout experiences and PCI-compliant payment flows for BBX travel booking.',
    highlights: [
      'Implemented secure iframe-based payment flows and optimized conversion with A/B testing.',
      'Partnered with platform teams on scalable API integration patterns.',
    ],
    tech: ['Next.js', 'React', 'NX', 'React Query', 'Optimizely'],
  },
  {
    company: 'Air New Zealand',
    role: 'Senior Software Developer',
    period: 'May 2023 - Oct 2024',
    location: 'Auckland, NZ',
    summary:
      'Delivered secure payment, GenAI chatbot, and customer request platforms on Next.js + NX.',
    highlights: [
      'Built Secure Pay for contact-center agents with PCI-compliant workflows.',
      'Developed a GenAI chatbot platform using Azure OpenAI with streaming responses.',
      'Shipped customer-facing forms integrated with Microsoft Dynamics 365.',
    ],
    tech: ['Next.js', 'Azure OpenAI', 'React Query', 'RxJS', 'Azure B2C'],
  },
  {
    company: 'Serko Ltd.',
    role: 'Senior Software Developer',
    period: 'May 2022 - May 2023',
    location: 'Auckland, NZ',
    summary:
      'Scaled a booking platform for business travel with NX monorepo architecture.',
    highlights: [
      'Designed reusable components and booking flows across search, itinerary, and checkout.',
      'Integrated OpenAPI clients with typed API contracts using Orval.',
    ],
    tech: ['React', 'Next.js', 'NX', 'Orval', 'Google Maps API'],
  },
  {
    company: 'Datacom (ERoad)',
    role: 'Senior React Developer',
    period: 'May 2021 - May 2022',
    location: 'Auckland, NZ',
    summary:
      'Built React Native mobile experiences for logistics and driver analytics.',
    highlights: [
      'Delivered iOS and Android features for dashcam management and telemetry.',
      'Maintained reliability across hardware integrations and real-time data updates.',
    ],
    tech: ['React Native', 'Redux Toolkit', 'Testing Library'],
  },
  {
    company: 'ASB Bank',
    role: 'Senior Software Engineer',
    period: 'Dec 2018 - May 2021',
    location: 'Auckland, NZ',
    summary:
      'Delivered digital investment platforms for KiwiSaver and wealth management.',
    highlights: [
      'Built customer-facing React apps with strong compliance and security focus.',
      'Integrated with .NET Core APIs and design system components.',
    ],
    tech: ['React', 'Redux', 'TypeScript', '.NET Core'],
  },
  {
    company: 'Centelon',
    role: 'Senior Full Stack Developer',
    period: 'Nov 2017 - Nov 2018',
    location: 'Pune, India',
    summary: 'Led MERN digital transformation projects and mentored engineers.',
    highlights: [
      'Owned architecture and delivery for mutual fund investment platforms.',
      'Built AWS-integrated workflows for notifications and document processing.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    company: 'FIS Global',
    role: 'Engineer to Senior Engineer',
    period: 'Jul 2012 - Oct 2017',
    location: 'Pune, India',
    summary:
      'Delivered securities and trade processing platforms with Java, C++, and AngularJS.',
    highlights: [
      'Migrated legacy applet UIs to HTML5 and AngularJS.',
      'Supported FIX protocol integrations and data migration workflows.',
    ],
    tech: ['Java', 'C++', 'AngularJS', 'Spring MVC'],
  },
];

export const Experience = () => {
  return (
    <PageSection
      id={PROFILE_PAGE_SECTION_IDS.experience}
      className="bg-gradient-to-r from-primary-50 to-secondary-50 pb-8"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold my-8 sm:my-10 underline">Experience</p>
      </div>
      <div className="grid gap-6">
        {experiences.map((item) => (
          <Card key={`${item.company}-${item.period}`} className="rounded-sm">
            <CardBody className="gap-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-2xl font-semibold">{item.role}</p>
                  <p className="text-base text-foreground/70">
                    {item.company} · {item.location}
                  </p>
                </div>
                <p className="text-sm text-foreground/70">{item.period}</p>
              </div>
              <p className="text-base">{item.summary}</p>
              <Divider />
              <ul className="list-disc list-inside text-sm space-y-1">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((tech) => (
                  <Chip key={tech} size="sm" variant="flat" color="primary">
                    {tech}
                  </Chip>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </PageSection>
  );
};
