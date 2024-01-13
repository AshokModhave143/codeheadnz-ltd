'use client';

import { Footer } from '../_common/components/Footer';
import { Header } from '../_common/components/Header';
import { IntroductionSection } from './_module/components/IntroductionSection';

export default async function GettingStarted() {
  return (
    <div className="flex flex-col">
      <Header />
      <IntroductionSection />
      <Footer />
    </div>
  );
}
