import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { Button } from '@nextui-org/react';

export const IntroductionSection = () => {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat bg-center size-full sm:size-full md:size-full"
      style={{
        backgroundImage: `url(
          '/static/images/intro-page-bg-image.jpg'
        )`,
      }}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="w-full lg:w-1/3 md:w-1/2 sm:w-3/4 text-center rounded-sm backdrop-blur-sm bg-white/20 px-4 py-4">
          <h1 className="text-5xl text-white">Codehead NZ Limited</h1>
          <p className="text-2xl border-small w-fit mx-auto px-2 my-4 bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent uppercase">
            Bring ideas to real
          </p>
          <p className="text-lg bg-black-100  text-center light:text-foreground/40 font-light mt-8 px-4 py-2 rounded-lg">
            we blend innovation with expertise to deliver cutting-edge software
            development and programming services tailored to meet your unique
            business needs. As a leading technology solutions provider, we take
            pride in our commitment to excellence and our passion for staying at
            the forefront of the latest technological advancements.
          </p>
        </div>
        <Button
          variant="shadow"
          size="lg"
          as="a"
          href={`/profile/#${PROFILE_PAGE_SECTION_IDS.introduction}`}
          color="primary"
          className="mt-8"
        >
          Get started...
        </Button>
      </div>
    </div>
  );
};
