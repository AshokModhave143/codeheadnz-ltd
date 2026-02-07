import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { Avatar, Button, Chip } from '@heroui/react';

export const Introduction = () => {
  return (
    <div
      className="h-screen justify-center items-center w-screen overflow-auto"
      id={PROFILE_PAGE_SECTION_IDS.introduction}
    >
      <div className="w-full h-screen bg-[url('/static/images/profile-intro-bg.jpg')] bg-cover bg-center">
        <div className="h-full flex flex-col justify-evenly items-center backdrop-brightness-50 text-white px-4">
          <div className="text-4xl font-bold text-center sm:text-6xl sm:text-left">
            <p>
              I design and build{' '}
              <span className="bg-secondary">&nbsp;products&nbsp;</span>
            </p>
            <p>
              that <span className="underline">ship real impact</span>.
            </p>
          </div>
          <div className="flex flex-wrap-reverse sm:flex-nowrap w-full md:w-2/3 justify-end">
            <div className="container-md mx-auto max-w-5xl w-full h-full my-4">
              <div className="flex flex-wrap-reverse sm:flex-nowrap">
                <div className="flex flex-col grow justify-start items-center p-8 sm:py-16 text-wrap text-center font-bold sm:text-4xl">
                  <p className="self-center text-4xl sm:text-6xl sm:self-end">
                    {`Hi 👋, I'm `}
                    <span className="text-nowrap bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent capitalize">
                      Ashok Modhave.
                    </span>
                  </p>
                  <p className="text-2xl font-light mt-4">
                    Senior Full-Stack Engineer in Auckland with 13+ years
                    building banking, fintech, and travel platforms with React,
                    Next.js, TypeScript, Java, and cloud-native services.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
                    {[
                      'React',
                      'Next.js',
                      'TypeScript',
                      'Node.js',
                      'Java',
                      'AWS',
                      'GenAI',
                    ].map((label) => (
                      <Chip
                        key={label}
                        size="sm"
                        variant="flat"
                        color="primary"
                        className="text-foreground"
                      >
                        {label}
                      </Chip>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <Button
                      as="a"
                      href={`#${PROFILE_PAGE_SECTION_IDS.projects}`}
                      color="primary"
                      variant="solid"
                      radius="sm"
                    >
                      View Projects
                    </Button>
                    <Button
                      as="a"
                      href={`#${PROFILE_PAGE_SECTION_IDS.contact}`}
                      color="secondary"
                      variant="bordered"
                      radius="sm"
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>
                <div className="flex grow justify-center items-center">
                  <Avatar
                    src="/static/images/profile.jpg"
                    alt="Ashok Modhave profile image"
                    className="h-36 w-36 text-large sm:h-64 sm:w-64 text-center overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
