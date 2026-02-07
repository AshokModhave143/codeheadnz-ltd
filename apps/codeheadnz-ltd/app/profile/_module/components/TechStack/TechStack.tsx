import { PageSection } from '@common/components/PageSection';
import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { Card, CardBody, Chip } from '@heroui/react';

export const TechStack = () => {
  const techStackList = [
    {
      title: 'Frontend',
      items: [
        'React',
        'Next.js',
        'React Native',
        'TypeScript',
        'Redux Toolkit',
        'React Hook Form',
        'Zod',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend',
      items: ['Java Spring Boot', 'Node.js', 'NestJS', 'Express', 'REST APIs'],
    },
    {
      title: 'Cloud + DevOps',
      items: ['AWS', 'Azure DevOps', 'Docker', 'Kubernetes', 'Serverless'],
    },
    {
      title: 'Data + Messaging',
      items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Kafka', 'RabbitMQ'],
    },
    {
      title: 'Testing + Quality',
      items: ['Jest', 'React Testing Library', 'Playwright', 'Cypress'],
    },
    {
      title: 'AI + Observability',
      items: ['Azure OpenAI', 'Generative AI', 'Sentry', 'New Relic'],
    },
  ];
  return (
    <PageSection id={PROFILE_PAGE_SECTION_IDS.techStack}>
      <div className="container mx-auto size-full flex flex-col items-center gap-4 px-4 py-8 sm:px-2 sm:py-12">
        <p className="text-3xl font-bold underline">Tech Stack</p>
        <p>{`Technologies I've been working with recently`}</p>
        <div className="grid gap-6 md:grid-cols-2">
          {techStackList.map((group) => (
            <Card key={group.title} className="rounded-sm">
              <CardBody className="gap-3">
                <p className="text-lg font-semibold">{group.title}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item} size="sm" variant="flat" color="primary">
                      {item}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
};
