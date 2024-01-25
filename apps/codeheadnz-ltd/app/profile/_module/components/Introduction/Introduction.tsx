import { Avatar } from '@nextui-org/react';

export const Introduction = () => {
  return (
    <div className="h-screen justify-center items-center w-screen overflow-auto">
      <div className="w-full h-screen bg-[url('/static/images/profile-intro-bg.jpg')] bg-cover bg-center">
        <div className="h-full flex flex-col justify-evenly items-center backdrop-brightness-50 text-white px-1">
          <div className="text-4xl font-bold text-center sm:text-6xl sm:text-left">
            <p>
              I want to{' '}
              <span className="bg-secondary">&nbsp;make things&nbsp;</span>
            </p>
            <p>that make difference.</p>
          </div>
          <div className="flex flex-wrap-reverse sm:flex-nowrap w-full md:w-1/2 justify-right">
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
                    I am a Full Stack Developer with 10+ years of experience in
                    front-end and back-end innovative and reliable web and
                    mobile applications.
                  </p>
                </div>
                <div className="flex grow  justify-center items-center">
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
