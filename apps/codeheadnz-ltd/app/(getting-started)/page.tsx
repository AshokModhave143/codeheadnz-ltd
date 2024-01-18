'use client';

import { AboutSection } from './_module/components/AboutSection';
import { IntroductionSection } from './_module/components/IntroductionSection';

export default function GettingStarted() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <IntroductionSection />
      <AboutSection />
    </div>
  );
}
