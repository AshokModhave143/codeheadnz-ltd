import { PageSection } from '@common/components/PageSection';

export const About = () => {
  return (
    <PageSection
      id="about"
      className="h-fit w-full bg-gradient-to-r from-primary-50 to-secondary-50 pb-8"
    >
      <div className="flex flex-col justify-center items-center ">
        <p className="text-4xl font-bold my-8 sm:my-10">About</p>
      </div>
      <div
        className="container mx-auto rounded-lg bg-primary text-base p-4 m-4 border-x-large text-justify border-y-1 border-content1-foreground"
        role="alert"
      >
        <p className="object-none object-left-top">
          Mission-driven full stack developer with a passion for bringing
          digital visions to life, crafting modern, innovative and reliable web
          and mobile applications.
        </p>
      </div>
      <div className="container mx-auto">
        <ul>
          <li>
            • Working as Software Developer with 9+ years of overall technology
            experience including 5+ years in Full Stack Development
          </li>
          <li>
            • Strong experience of developing web and mobile applications using
            JavaScript frameworks namely HTML5, ReactJs, React-native, Redux,
            ReduxToolkit, React-hook-form, NodeJs, typescript,
            ExpressJs,AngularJS/1.x/2.x/5, react-testing-library
          </li>
          <li>
            • Knowledge of developing applications using AWS services namely
            Lambda, DynamoDB, Serverless, S3, Simple Email Service(SES), Simple
            Notification Service(SNS)
          </li>
          <li>
            • Programming skills in multiple languages like Javascript,
            Typescript, Java, Spring MVC, NodeJs, C++
          </li>
          <li>
            • Exploring new technologies in Artificial Intelligence(AI)/Machine
            Learning(ML), Dialogflow(Api.ai)
          </li>
          <li>
            • Good exposure to Frameworks like Spring MVC, MVVM and developing
            RESTful web services using ExpressJs, NodeJs
          </li>
          <li>• Good knowledge of Docker, Kubernet</li>
          <li>
            • Technical and functional knowledge of Banking and Finance domain
          </li>
          <li>
            • Experience of front and back end development of customer facing
            web and mobile applications
          </li>
          <li>
            • Involved requirement analysis, design, development and unit
            testing of console as well as web-based applications of finance
          </li>
          <li>
            • Technical knowledge of RDBMS databases like Oracle 10g, MySQL, MS
            SQL as well as NoSQL databases like MongoDB, DynamoDB etc
          </li>
          <li>
            • Good experience on developing test automation javascript framework
            using selenium webdriver, mocha, chai, NodeJs, testNG, Cucumber
          </li>
          <li>
            • Completed Bachelors in Information Technology and Engineering from
            University of Pune
          </li>
        </ul>
      </div>
    </PageSection>
  );
};
