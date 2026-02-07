import { PageSection } from '@common/components/PageSection';
import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { Card, CardBody } from '@heroui/react';

export const About = () => {
  const glimpse = [
    {
      title: 'Front-End Architecture',
      description:
        'React, Next.js, React Native, TypeScript, Redux Toolkit, React Hook Form, Zod',
    },
    {
      title: 'Back-End Systems',
      description: 'Java Spring Boot, Node.js, NestJS, Express, REST APIs',
    },
    {
      title: 'Cloud + DevOps',
      description:
        'AWS (Lambda, S3, DynamoDB), Azure DevOps, Docker, Kubernetes',
    },
    {
      title: 'AI + LLM',
      description: 'Azure OpenAI, Generative AI, prompt workflows',
    },
    {
      title: 'Data + Messaging',
      description: 'PostgreSQL, MySQL, MongoDB, Kafka, RabbitMQ',
    },
    {
      title: 'Quality + Testing',
      description: 'Jest, React Testing Library, Playwright, Cypress, Selenium',
    },
  ];

  return (
    <PageSection
      id={PROFILE_PAGE_SECTION_IDS.about}
      className="h-fit w-full bg-gradient-to-r from-primary-50 to-secondary-50 pb-8 px-4"
    >
      <div className="flex flex-col justify-center items-center ">
        <p className="text-4xl font-bold my-8 sm:my-10 underline">About</p>
      </div>
      <Card className="container mx-auto rounded-lg bg-gradient-to-t from-secondary-100 to-secondary-1000 border-primary-800">
        <CardBody className="text-2xl font-medium text-justify">
          I build modern, secure, and scalable web platforms across banking,
          fintech, and travel. I lead frontend architecture, collaborate with
          product and UX, and deliver end-to-end solutions from discovery to
          production.
        </CardBody>
      </Card>
      <div className="container mx-auto text-xl font-normal">
        <p className="indent-8 my-4">
          With 13+ years of hands-on experience, I specialize in frontend-heavy
          full-stack delivery using React and Next.js, while building reliable
          backend services with Java Spring Boot and Node.js. I focus on
          performance, accessibility, and developer experience while keeping
          security and compliance front and center.
        </p>
        <p>Here&apos;s a glimpse of my arsenal:</p>
        <ul className="list-disc list-inside">
          {glimpse.map((item) => (
            <li key={item.title}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          Beyond the code, I&apos;m a proactive collaborator and mentor who
          enjoys solving complex problems and shipping high-quality user
          experiences. I&apos;m always exploring new technologies in Generative
          AI and modern UI systems to keep teams and products ahead.
        </p>
        <p className="my-4">
          <strong>Let&apos;s collaborate!</strong> I&apos;m eager to hear about
          your next digital challenge and how I can help you transform it into a
          reality.
        </p>
      </div>
    </PageSection>
  );
};
