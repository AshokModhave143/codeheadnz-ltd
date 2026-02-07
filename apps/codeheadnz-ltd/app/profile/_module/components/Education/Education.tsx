import { PageSection } from '@common/components/PageSection';
import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { Card, CardBody, Chip } from '@heroui/react';

const education = [
  {
    title: 'Bachelor of Engineering (Information Technology)',
    institution: 'University of Pune',
    period: '2007 - 2011',
  },
];

const certifications = [
  'Oracle Certified Professional Java (OCJP)',
  'Introduction to Generative AI',
  'Implementing Design System',
  'Mobile App Analytics for Developers',
  'Fin Tech Pro',
];

const awards = [
  'FIS Hackathon 2017: Top 5 rank for innovative idea implementation',
  'FIS Innov8 2017: Runner-Up for innovative idea implementation',
];

export const Education = () => {
  return (
    <PageSection id={PROFILE_PAGE_SECTION_IDS.education} className="pb-8">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold my-8 sm:my-10 underline">
          Credentials
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-sm">
          <CardBody className="gap-3">
            <p className="text-2xl font-semibold">Education</p>
            {education.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <p className="text-lg font-medium">{item.title}</p>
                <p className="text-sm text-foreground/70">
                  {item.institution} · {item.period}
                </p>
              </div>
            ))}
          </CardBody>
        </Card>
        <Card className="rounded-sm">
          <CardBody className="gap-3">
            <p className="text-2xl font-semibold">Certifications</p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <Chip key={cert} size="sm" variant="flat" color="secondary">
                  {cert}
                </Chip>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
      <Card className="rounded-sm mt-6">
        <CardBody className="gap-3">
          <p className="text-2xl font-semibold">Awards</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </PageSection>
  );
};
