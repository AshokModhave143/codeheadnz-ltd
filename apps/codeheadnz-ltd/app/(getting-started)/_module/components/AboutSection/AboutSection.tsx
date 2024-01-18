import { PageSection } from '@common/components/PageSection';
import { Progress } from '@nextui-org/react';

export const AboutSection = () => {
  return (
    <PageSection>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl">About this</h1>
        <Progress
          isStriped
          label="Work in progress..."
          aria-label="Loading..."
          color="secondary"
          value={60}
          className="max-w-md"
        />
      </div>
    </PageSection>
  );
};
