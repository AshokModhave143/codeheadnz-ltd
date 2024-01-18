import { PageSection } from '@common/components/PageSection';
import { Progress } from '@nextui-org/react';

export const AboutSection = () => {
  return (
    <PageSection>
      <div className="size-full flex flex-col items-center justify-center">
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
