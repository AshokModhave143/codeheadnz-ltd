import { TechStack } from './_module/components/TechStack';
import { Introduction } from './_module/components/Introduction';
import { About } from './_module/components/About';
import { Experience } from './_module/components/Experience';
import { Projects } from './_module/components/Projects';
import { Education } from './_module/components/Education';
import { Contact } from './_module/components/Contact';

export default function ProfilePage() {
  return (
    <div className="h-screen w-screen bg-background overflow-auto">
      <Introduction />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
