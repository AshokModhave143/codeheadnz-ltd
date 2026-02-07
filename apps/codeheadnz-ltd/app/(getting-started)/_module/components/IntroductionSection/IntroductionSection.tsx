import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { Button } from '@heroui/react';
import Image from 'next/image';

export const IntroductionSection = () => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="relative min-h-[60vh] w-full">
        <Image
          src="/static/images/intro-page-bg-image.jpg"
          alt="Codehead NZ Limited"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <div className="w-full max-w-xl rounded-sm bg-white/20 px-4 py-4 backdrop-blur-sm">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
              Codehead NZ Limited
            </h1>
            <p className="mx-auto my-4 w-fit border-small px-2 text-xl sm:text-2xl bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent uppercase">
              Bring ideas to reality
            </p>
            <p className="text-base sm:text-lg bg-black-100 text-center font-light mt-6 px-4 py-2 rounded-lg">
              we blend innovation with expertise to deliver cutting-edge
              software development and programming services tailored to meet
              your unique business needs. As a leading technology solutions
              provider, we take pride in our commitment to excellence and our
              passion for staying at the forefront of the latest technological
              advancements.
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
    </div>
  );
};
