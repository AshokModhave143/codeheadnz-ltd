import { PageSection } from '@common/components/PageSection';
import { Avatar } from '@nextui-org/react';

export const Introduction = () => {
  return (
    <PageSection>
      <div className="container-md mx-auto max-w-5xl">
        <div className="flex flex-wrap-reverse sm:flex-nowrap">
          <div className="flex flex-col grow justify-start items-center p-12 sm:py-24 text-wrap text-center font-bold sm:text-4xl sm:text-left">
            <p className="self-center text-5xl">
              {`Hi 👋, I'm `}
              <span className="text-nowrap bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent capitalize">
                Ashok Modhave.
              </span>
            </p>
            <p className="text-2xl font-light mt-8">
              I am a Full Stack Developer with 10+ years of experience in
              front-end and back-end innovative and reliable web and mobile
              applications.
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
        <div className="w-full text-center px-2">
          <p className="text-3xl sm:text-4xl italic font-bold rounded-full px-4 py-2 bg-gray-700 bg-transparent text-yellow-500">
            I want to <u>make things</u> that make difference.
          </p>
        </div>
      </div>
    </PageSection>
  );
};
