import { Introduction } from './_module/components/Introduction';
import { TechStack } from './_module/components/TechStack';
import { Contact } from './_module/components/contact';

export default function ProfilePafe() {
  return (
    <div className="h-screen w-screen bg-background">
      <Contact />
      <Introduction />
      <TechStack />
    </div>
  );
}
