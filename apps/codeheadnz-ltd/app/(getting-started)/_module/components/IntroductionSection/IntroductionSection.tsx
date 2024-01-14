import { PageSection } from '@common/components/PageSection';

export const IntroductionSection = () => {
  return (
    <PageSection>
      <div className="bg-scroll bg-[url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[70vh]">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="text-center h-auto w-1/2 px-8 py-8 rounded-sm backdrop-blur-sm bg-white/20">
            <h1 className="text-5xl text-white">Codehead NZ Limited</h1>
            <p className="text-2xl bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">
              Bring ideas to real
            </p>
            <p className="text-lg bg-background text-center light:text-foreground/40 font-light mt-8 px-4 py-2 rounded-lg">
              we blend innovation with expertise to deliver cutting-edge
              software development and programming services tailored to meetß
              your unique business needs. As a leading technology solutions
              provider, we take pride in our commitment to excellence and our
              passion for staying at the forefront of the latest technological
              advancements.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
};
