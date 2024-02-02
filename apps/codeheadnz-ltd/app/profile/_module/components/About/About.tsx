import { AnchorJumpButton } from '@common/components/AnchorJumpButton';
import { PageSection } from '@common/components/PageSection';

export const About = () => {
  const glimpse = [
    {
      title: 'Front-End Mastery',
      description:
        'HTML5, React, React Native, Next.js, Redux, Redux Toolkit, React-Hook-Form',
    },
    {
      title: 'Back-End Powerhouse',
      description: 'Node.js, Typescript, Express.js, Spring MVC, Java',
    },
    {
      title: 'Cloud Savvy',
      description: 'AWS Lambda, DynamoDB, Serverless, S3, SES, SNS',
    },
    {
      title: 'AI/ML Explorer',
      description: 'Dialogflow (Api.ai)',
    },
    {
      title: 'Database',
      description: 'RDBMS (Oracle, MySQL, MS SQL) & NoSQL (MongoDB, DynamoDB)',
    },
    {
      title: 'Testing Champion',
      description: 'Selenium WebDriver, Mocha, Chai, Node.js, TestNG, Cucumber',
    },
  ];

  return (
    <PageSection
      id="about"
      className="h-fit w-full bg-gradient-to-r from-primary-50 to-secondary-50 pb-8 px-4"
    >
      <div className="flex flex-col justify-center items-center ">
        <p className="text-4xl font-bold my-8 sm:my-10 underline">About</p>
      </div>
      <div
        className="container mx-auto rounded-lg bg-primary p-4 m-4 border-s-8 text-justify border-e-1 border-y-1 bg-gradient-to-t from-secondary-100 to-secondary-1000 border-primary-800"
        role="alert"
      >
        <div className="text-2xl font-medium">
          Crafting the Future, Pixel by Pixel: A passionate Full-Stack Developer
          at your service. Bringing digital visions to life, building modern,
          innovative and reliable web and mobile applications.
        </div>
      </div>
      <div className="container mx-auto text-xl font-normal">
        <p className="indent-8 my-4">
          With a deep-seated passion for breathing life into digital visions, I
          bring 11+ years of technology experience with refined Full-Stack
          experties, to every project. I wear multiple hats - seamlessly
          navigating the front-end with React, React Native, and Redux while
          building robust back-ends with Node.js, Expreess, and various AWS
          services.
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
          And beyond the code, I bring strong communication, collaboration, and
          problem-solving skills to the table. Whether it&apos;s building
          customer-facing applications, automating tests, or venturing into AI,
          I&apos;m driven by continuous learning and delivering exceptional
          results. As a web developer, I enjoy using my obsessive attention to
          detail, my unequivocal love for making things, and my mission-driven
          work ethic to literally change the world. That&apos;s why I&apos;m
          excited to make a big impact at a high growth company.
        </p>
        <p className="my-4">
          <strong>Let&apos;s collaborate!</strong> I&apos;m eager to hear about
          your next digital challenge and how I can help you transform it into a
          reality.
        </p>
      </div>

      <AnchorJumpButton href="#tech-stack" />
    </PageSection>
  );
};
