import { Avatar } from '@nextui-org/react';

export const Contact = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <div className="w-full h-screen bg-[url('/static/images/profile-intro-bg.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center items-start backdrop-brightness-50">
          <div className="text-6xl font-bold text-white w-1/2 mt-32 text-center">
            <p>
              I want to{' '}
              <span className="bg-secondary">&nbsp;make things&nbsp;</span>
            </p>
            <p>that make difference.</p>
          </div>
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
                className="h-48 w-48 text-large sm:h-64 sm:w-64 text-center overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
