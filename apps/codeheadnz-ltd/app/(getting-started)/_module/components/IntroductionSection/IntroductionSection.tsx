import { PageSection } from '../../../../_common/components/PageSection';

export const IntroductionSection = () => {
  return (
    <PageSection>
      <div className="bg-scroll bg-[url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[70vh]">
        <div className="flex flex-col h-full justify-center items-center">
          <h1 className="text-5xl text-white">Codehead NZ Limited</h1>
          <p className="text-2xl bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">
            Bring ideas to real
          </p>
        </div>
      </div>
    </PageSection>
  );
};
