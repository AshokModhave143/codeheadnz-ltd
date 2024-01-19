import { PageSection } from '@common/components/PageSection';
import { Avatar } from '@nextui-org/react';

export const Introduction = () => {
  return (
    <PageSection>
      <div className="container-sm mx-auto max-w-4xl">
        <div className="flex flex-wrap-reverse sm:flex-nowrap">
          <div className="flex flex-col grow  justify-start items-center p-12 sm:py-24 text-center text-3xl font-bold sm:text-4xl sm:text-left">
            <p className="self-center sm:self-baseline">Hi 👋, </p>
            <p>
              My name is{' '}
              <span className="text-nowrap bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent capitalize">
                Ashok Modhave.
              </span>
            </p>
            <p>
              I am a Full Stack Engineeer and Building innovative and reliable
              web and mobile applications.
            </p>
          </div>
          <div className="flex grow  justify-center items-center">
            <Avatar
              src="/static/images/profile.jpg"
              alt="Ashok Modhave profile image"
              className="h-48 w-48 text-large sm:h-64 sm:w-64 text-center"
            />
          </div>
        </div>
      </div>
    </PageSection>
  );
};
