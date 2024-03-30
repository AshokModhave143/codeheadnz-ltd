import { TechStack } from './_module/components/TechStack';
import { Introduction } from './_module/components/Introduction';
import { About } from './_module/components/About';
import { Projects } from './_module/components/Projects';
import { Contact } from './_module/components/Contact';

export default function ProfilePafe() {
  return (
    <div className="h-screen w-screen bg-background overflow-auto">
      <Introduction />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}
