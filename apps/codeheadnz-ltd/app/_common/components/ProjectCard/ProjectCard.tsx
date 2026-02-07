import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Image,
  Link,
  Chip,
} from '@heroui/react';

export interface ProjectCardProps {
  title: string;
  associatedWith?: string;
  description: string;
  responsibilities?: string[];
  respositoryLink: string;
  image?: string;
  techStack: string[];
}
export const ProjectCard = ({
  title,
  associatedWith,
  description,
  respositoryLink,
  responsibilities,
  image,
  techStack,
}: ProjectCardProps) => {
  return (
    <Card className="max-w-[400px] rounded-sm">
      {image ? (
        <CardHeader className="flex gap-3">
          <Image width={400} alt={title} src={image} />
        </CardHeader>
      ) : null}
      <CardBody className="flex flex-col gap-2">
        <p className="text-2xl">{title}</p>
        {associatedWith ? (
          <p className="text-sm text-foreground/70">{associatedWith}</p>
        ) : null}
        <p>{description}</p>
        <div>
          <p className="text-sm font-bold underline">Responsibilities:</p>
          <ul className="text-sm">
            {responsibilities?.map((responsibility, index) => (
              <li key={`responsibility-${index}`}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold underline">Technology:</p>
          <div className="text-sm">
            {techStack.map((tech, index) => (
              <Chip
                color="primary"
                key={`tech-${index}`}
                size="sm"
                className="gap-y-3 text-foreground"
              >
                {tech}
              </Chip>
            ))}
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal href={respositoryLink} showAnchorIcon>
          View more details
        </Link>
      </CardFooter>
    </Card>
  );
};
